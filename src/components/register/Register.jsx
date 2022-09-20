import './Register.css';
import googleimage from "./google.png"
import { NavLink, useNavigate } from "react-router-dom"
import { Formik, Form  } from 'formik';
import LoginInput from '../LoginInput';
import {registerInitialValues} from "../../formik/initialValues.js"
import { registerValidationSchema } from '../../formik/validationSchema';

import { register, signInGoogle } from '../../firebase/firebase-utils';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const ERROR_CODES = {
    EMAIL_IN_USE: 'auth/email-already-in-use',
  };

export default function Register() {

  const {user} = useSelector(state => state.user)
  const navigate = useNavigate()


  useEffect(() => {
    if(user) {
      navigate("/")
    }
  
  },[user, navigate])




    return (
        <div className="register">
            <h2 className='title'>Crea tu cuenta</h2>
            <Formik initialValues={registerInitialValues} validationSchema={registerValidationSchema}
              onSubmit={async (values, { resetForm }) => {
                const { email, password, name } = values;
                try {
                  const response = await register(email, password);
                  resetForm();
                } catch (error) {
                  if (error.code === ERROR_CODES.EMAIL_IN_USE) {
                    alert("este correo ya esta en uso");
                  }
                }
              }}>
                <Form   className='form'>
                    <LoginInput name="name" type="text" placeholder='Nombre'></LoginInput>
                    <LoginInput name="email" type="text" placeholder='Email'></LoginInput>
                    <LoginInput name="password" type="password" placeholder='Password'></LoginInput>
                    <h3>O podes ingresar con</h3>
                    <button className='button' onClick={e => {
                        const response = signInGoogle();
                        console.log({response})
                    }}>
                        <img style={{ width: "25px", margin: "10%" }} classname="googleimage" src={googleimage} />
                        <p>Google</p>
                    </button>
                    <NavLink style={{ color: "#91C612", fontWeight: "600" }} to="/login" >¿Ya tenes cuenta? inicia sesión</NavLink>
                    <button type="submit"   className='register_button'  >Registrarse</button>
                </Form>
            </Formik>
        </div>
    )

}