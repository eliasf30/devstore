import logo from '../logo.svg';
import './navbar.css';
import {Route, Routes, Navigate, Link, NavLink} from "react-router-dom"
import { FaShoppingCart, FaUser } from 'react-icons/fa';

export default function Navbar() {

    return (
        <div className="navbar">
            <div className='div_logo'>
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className='h1logo'>DevStore</h1>
            </div>
            <input className='navbar_input' type="text" placeholder='¿Que estas buscando?'></input>
            <FaShoppingCart style={{ color: 'aliceblue', fontSize: '40px', marginLeft:"20%"}} />
            <div className='div_login'>
                <NavLink className='navbar_link' to="register">Iniciar sesion</NavLink>
                <FaUser style={{ color: 'aliceblue', fontSize: '20px' }} />
            </div>


        </div>
    );
}




