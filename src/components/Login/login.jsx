import "./login.css"
import {Route, Routes, Navigate, Link, NavLink} from "react-router-dom"


export default function Login(){

    return(
        <div className="login">
            <h2 className="title">Iniciar Sesion</h2>
            <input className='logininput' type="text" placeholder='Email'></input>
            <input className='logininput' type="text" placeholder='Password'></input>
            <NavLink style={{color: "#91C612", fontWeight:"600",textDecoration:"none", }} to="/forgot-password" >¿Olvidaste la contraseña? Reestablecela</NavLink>
            <button className='login_button'>Ingresar</button>
            <NavLink style={{color: "#91C612", fontWeight:"600",textDecoration:"none", marginTop:"2%"}} to="/register" >No tengo cuenta</NavLink>
            
        </div>
        
    );

}