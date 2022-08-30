import { NavLink } from "react-router-dom"
import "./Footer.css"


export default function Foooter() {
    return (
        <div className="footer">
            <NavLink className="footer_navlink" to="">Términos de uso</NavLink>
            <NavLink className="footer_navlink" to="">Trabajá con Nosotros</NavLink>
            <NavLink className="footer_navlink" to="">Soporte</NavLink>
        </div>
    )
}