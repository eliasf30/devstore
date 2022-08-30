import { NavLink } from "react-router-dom"




export default function Forgotpassword(){
    return(
        <div className="login">
            <h2 className="title">Te enviaremos un mail para recuperar tu contraseña</h2>
            <input className='logininput' type="text" placeholder='Email'></input>
            <NavLink style={{color: "#91C612", fontWeight:"600",textDecoration:"none", }} to="/login" >Recorde mi contraseña!</NavLink>
            <button className='login_button'>Ingresar</button>
            
        </div>
    )
}