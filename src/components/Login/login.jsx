import "./login.css"
import { Route, Routes, Navigate, Link, NavLink } from "react-router-dom"
import LoginInput from "../LoginInput";
import { Formik, Form } from 'formik';
import { loginInitialValues } from "../../formik/initialValues";
import { loginValidationSchema } from "../../formik/validationSchema";
import { getOrCreateUserProfile as getOrCreateUserProfile, signIn } from "../../firebase/firebase-utils";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const errorCodes = {
    WRONG_PASSWORD: "auth/wrong-password",
    NOT_FOUND_USER: "auth/user-not-found"
}



export default function Login() {


    const {user} = useSelector(state => state.user)
    const navigate = useNavigate()
  
  
    useEffect(() => {
      if(user) {
        navigate("/")
      }
    
    },[user, navigate])
  
  

    return (
        <div className="login">
            <Formik initialValues={loginInitialValues}
                validationSchema={loginValidationSchema}
                onSubmit={async values => {
                    const { email, password } = values;
                    try {
                        const { user } = await signIn(email, password)
                        const response = await getOrCreateUserProfile(user);
                        const data = response.data();
                        console.log({data})
                        
                    } catch (error) {
                        const { code } = error;
                        switch(code){
                            case errorCodes.WRONG_PASSWORD:
                                return alert("contraseña incorrecta")
                            case errorCodes.NOT_FOUND_USER:
                                return alert("usuario no encontrado")
                                default:
                                    return alert("error interno del servidor")
                        }
                    }
                }}
            >
                <Form className="form">
                    <h2 className="title">Iniciar Sesion</h2>
                    <LoginInput name="email" className='logininput' type="text" placeholder='Email'></LoginInput>
                    <LoginInput name="password" className='logininput' type="password" placeholder='Password'></LoginInput>
                    <NavLink style={{ color: "#91C612", fontWeight: "600", textDecoration: "none", }} to="/forgot-password" >¿Olvidaste la contraseña? Reestablecela</NavLink>
                    <button type="submit" className='login_button'>Ingresar</button>
                    <NavLink style={{ color: "#91C612", fontWeight: "600", textDecoration: "none", marginTop: "2%" }} to="/register" >No tengo cuenta</NavLink>
                </Form>
            </Formik>
        </div>

    );

}