import logo from '../logo.svg';
import './navbar.css';
import { NavLink, useNavigate } from "react-router-dom"
import { FaShoppingCart, FaUser, FaTrash, FaWindowClose, FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import CardCarrito from "./cardCarrito/cardcarrito.jsx"
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from '../redux/cart-actions';
import { Categories } from "../categories/categories"
import { useRef } from 'react';
import { auth } from '../firebase/firebase-utils';
import Login from '../components/login/login';


export default function Navbar() {


     const { user } = useSelector(state => state.user)




    const [showCart, setShowCart] = useState({ visibility: "hidden" })
    const [showModal, setShowModal] = useState({ visibility: "hidden" })
    const [search, setSearch] = useState("")


    const { items, totalcost } = useSelector(state => state.cart);

    const inputValue = useRef()

    const navigate = useNavigate()


    const dispatch = useDispatch()

    
    function order(){
        setShowCart({ visibility: "hidden" })
        navigate("order")
        
    }

    return (
        <div className="navbar">
            <div >
                <NavLink style={{ textDecoration: "none" }} className='div_logo' to="">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className='h1logo'>DevStore</h1>
                </NavLink>
            </div>
            <div className='input_div'>
                <input ref={inputValue} onInput={() => setSearch("home/" + inputValue.current.value)} list="categories" className='navbar_input' type="text" placeholder='¿Que estas buscando?'></input>
                <datalist id='categories' className='datalist' >
                    {
                        Categories.map(category => <option className='option' key={category.id} value={category.title}></option>)
                    }
                </datalist>
                <NavLink to={search} className='div_button'>
                    <FaSearch />
                </NavLink>
            </div>
            <button onClick={() => { setShowCart({ visibility: "visible" }) }} style={{ backgroundColor: "#37373F", border: "none" }}>
                <FaShoppingCart style={{ color: 'aliceblue', fontSize: '35px', marginLeft: "20%" }} />
            </button>
            <div className='div_login'>


                {user ? <button onClick={() => { setShowModal({ visibility: "visible" })}} className="name">{user.name}</button> :
                    <NavLink className='navbar_link' to="register">Iniciar sesion</NavLink>
                }
                {
                    user? <img src={user.photoURL} alt={`perfil - ${user.name}`} className="perfil_img"/> : <FaUser style={{ color: 'aliceblue', fontSize: '20px' }} />
                }
                
            </div>
            
            <div style={showModal} className="usermodal">
                <button onClick={() => { setShowModal({ visibility: "hidden" }) }} style={{ margin: "5%", marginTop: "8%", backgroundColor: "#2B2B2C", border: "none" }}>
                    <FaWindowClose style={{ fontSize: "2em", color: "#BEBEBE", position:'absolute', left:"0", top:"0", margin:"4%", marginBottom:"1%" }} />
                </button>
                <div style={{ width: "100%", borderBottom: "2px solid #E2E2E2", display: "flex", justifyContent: "center", margin: "5%", marginTop:"0" }}>
                    <h3>Bienvenido {user?.name}!</h3>
                </div>
                
                <button onClick={() =>  auth.signOut().then(() => { setShowModal({ visibility: "hidden" }) }) }  className="modal_button"> Cerrar sesion</button>
            </div>
            <div className='cart_div' style={showCart}>
                <button onClick={() => { setShowCart({ visibility: "hidden" }) }} style={{ margin: "5%", marginTop: "8%", backgroundColor: "#2B2B2C", border: "none" }}>
                    <FaWindowClose style={{ fontSize: "2em", color: "#BEBEBE" }} />
                </button>
                <div className='product_title_div'>
                    <h2 style={{ margin: "5%", color: "#BEBEBE" }}>Tus Productos</h2>

                    <FaTrash onClick={e => dispatch(deleteCart)} style={{ margin: "5%", fontSize: "1.5em", color: "#BEBEBE", cursor: "pointer" }} />

                </div>
                <div className='products_div'>

                    {items.length ? (
                        items.map(item => <CardCarrito key={item.id} {...item} />)
                    ) : (
                        <h3 className='noProductH3'>Aca van tus productos...</h3>
                    )}

                </div>
                <div className='total_div'>
                    <h3 style={{ margin: "5%", fontSize: "1.8em", color: "#BEBEBE" }}>Total:</h3>
                    <h3 style={{ margin: "5%", fontSize: "1.8em", color: "#BEBEBE" }}>${totalcost}</h3>
                </div>
                <div style={{ display: 'flex', justifyContent: "center" }}>
                    {
                        user?<button onClick={() => order()} disabled={!items.length} className='cart_button'>Iniciar Pedido</button> : <button onClick={() => navigate("Login")} disabled={!items.length } className='cart_button'>Iniciar Pedido</button>
                    }
                    
                </div>



            </div>


        </div>
    );
}




