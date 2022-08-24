import './Register.css';
import googleimage from "./google.png"
import {Route, Routes, Navigate, Link, NavLink} from "react-router-dom"


export default function Home() {
    return(
        <div className="register">
            <h2 className='title'>Crea tu cuenta</h2>
            <input className='registerinput' type="text" placeholder='Nombre'></input>
            <input className='registerinput' type="text" placeholder='Email'></input>
            <input className='registerinput' type="text" placeholder='Password'></input>
            <h3>O podes ingresar con</h3>
            <button className='button'>
                <img style={{width:"25px", margin:"10%"}} classname="googleimage" src={googleimage}/>
                <p>Google</p>
            </button>
            <Link style={{color: "#91C612", fontWeight:"600"}} to="">¿Ya tenes cuenta? inicia sesión</Link>
            <button className='register_button'>Registrarse</button>
        </div>
    )
    
}