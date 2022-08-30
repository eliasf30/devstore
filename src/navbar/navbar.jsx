import logo from '../logo.svg';
import './navbar.css';
import { Route, Routes, Navigate, Link, NavLink } from "react-router-dom"
import { FaShoppingCart, FaUser, FaTrash, FaWindowClose, FaSearch } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {


    const [showCart, setShowCart] = useState({ visibility: "hidden" })

    const Total = 3000





    return (
        <div className="navbar">
            <div >
                <NavLink style={{ textDecoration: "none" }} className='div_logo' to="">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className='h1logo'>DevStore</h1>
                </NavLink>
            </div>
            <div className='input_div'>
                <input className='navbar_input' type="text" placeholder='¿Que estas buscando?'></input>
                <button className='div_button'>
                    <FaSearch />
                </button>
            </div>
            <button onClick={() => { setShowCart({ visibility: "visible" }) }} style={{ backgroundColor: "#37373F", border: "none" }}>
                <FaShoppingCart style={{ color: 'aliceblue', fontSize: '35px', marginLeft: "20%" }} />
            </button>
            <div className='div_login'>
                <NavLink className='navbar_link' to="register">Iniciar sesion</NavLink>
                <FaUser style={{ color: 'aliceblue', fontSize: '20px' }} />
            </div>
            <div className='cart_div' style={showCart}>
                <button onClick={() => { setShowCart({ visibility: "hidden" }) }} style={{ margin: "5%", marginTop: "8%", backgroundColor: "#2B2B2C", border: "none" }}>
                    <FaWindowClose style={{ fontSize: "2em", color: "#BEBEBE" }} />
                </button>
                <div className='product_title_div'>
                    <h2 style={{ margin: "5%", color: "#BEBEBE" }}>Tus Productos</h2>
                    <FaTrash style={{ margin: "5%", fontSize: "1.5em", color: "#BEBEBE", }} />
                </div>
                <div className='products_div'></div>
                <div className='total_div'>
                    <h3 style={{ margin: "5%", fontSize: "1.8em", color: "#BEBEBE" }}>Total:</h3>
                    <h3 style={{ margin: "5%", fontSize: "1.8em", color: "#BEBEBE" }}>{Total}</h3>
                </div>
                <div style={{ display: 'flex', justifyContent: "center" }}>
                    <button className='cart_button'>Iniciar Pedido</button>
                </div>



            </div>


        </div>
    );
}




