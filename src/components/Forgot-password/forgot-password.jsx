import { Form, Formik } from "formik"
import { NavLink } from "react-router-dom"
import { forgotPasswordSchema } from '../../formik/validationSchema';
import { forgotPasswordInitial } from '../../formik/initialValues';
import { resetPaswword } from "../../firebase/firebase-utils";
import LoginInput from "../LoginInput";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ERROR_TYPES = {
    NOT_FOUND: 'auth/user-not-found',
  };

export default function Forgotpassword() {



    const {user} = useSelector(state => state.user)
    const navigate = useNavigate()
  
  
    useEffect(() => {
      if(user) {
        navigate("/")
      }
    
    },[user, navigate])
  

    return (
        <div className="login">
            <h2 className="title">Te enviaremos un mail para recuperar tu contraseña</h2>
            <Formik validationSchema={forgotPasswordSchema}
                initialValues={forgotPasswordInitial}
                onSubmit={async (values, actions) => {
                    try {
                        await resetPaswword(values.email);
                        actions.resetForm();
                    } catch (error) {
                        console.log({ error });
                        switch (error.code) {
                            case ERROR_TYPES.NOT_FOUND:
                                return alert('No existe ese mail');
                        }
                    }
                }}>
                <Form className="form">
                    <LoginInput className='logininput' name="email" type="text" placeholder='Email'></LoginInput>
                    <NavLink style={{ color: "#91C612", fontWeight: "600", textDecoration: "none", }} to="/login" >Recorde mi contraseña!</NavLink>
                    <button type="submit" className='login_button'>Ingresar</button>
                </Form>
            </Formik>

        </div>
    )
}