import Navbar from './navbar/navbar';
import './App.css';
import { Route, Routes, Navigate, Link, NavLink } from "react-router-dom"
import Home from './components/Home/Home.jsx';
import Register from './components/register/Register.jsx'
import Login from './components/login/login.jsx';
import Forgotpassword from './components/Forgot-password/forgot-password';
import Foooter from './Footer/Footer';
import Procesador from './categories/categorias/procesador';
import Gabinete from './categories/categorias/gabinete';
import Gpu from './categories/categorias/gpu'
import Motherboard from './categories/categorias/motherboard';
import Hdd from './categories/categorias/hdd'
import Fuente from './categories/categorias/fuente'
import Ram from './categories/categorias/ram'
import Monitor from './categories/categorias/monitor'



import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';
import {
  auth,
  getFirebaseOrders,
  getOrCreateUserProfile,
} from './firebase/firebase-utils';
import { useDispatch } from 'react-redux';
import { SetCurrentUser } from './redux/user/user-actions';
import Order from './components/order/order';

const onAuthChange = (dispatch, action) => {
  return onAuthStateChanged(auth, async user => {
    if (user){
      const {ref} = await getOrCreateUserProfile(user)
      
      onSnapshot(ref, snapshot => {

        const userData = snapshot.data();

        dispatch(action({id:snapshot.id, ...userData}))

      });
    
    }else{
      dispatch(action(null))


    }
    
  })

};

function App() {
  
  const dispatch = useDispatch();
    
  useEffect(() => {
    const unsuscribre = onAuthChange(dispatch, SetCurrentUser)
    return () => unsuscribre();
    
  },[dispatch]);

  function NotFound() {
    return (
      <div style={{ width: "100%",display:"flex", alignItems: "center", flexDirection:"column" }}>
        <h2> ERROR 404 - la pagina o el objeto que buscas no existe</h2>
        <button style={{margin:"1%"}}>
          <NavLink to="">Regresar al inicio</NavLink>
        </button>
      </div>
    )
  }

  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='*' element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/home/fuente" element={<Fuente />} />
        <Route path="/home/gabinete" element={<Gabinete />} />
        <Route path="/home/gpu" element={<Gpu />} />
        <Route path="/home/hdd" element={<Hdd />} />
        <Route path="/home/monitor" element={<Monitor />} />
        <Route path="/home/mother" element={<Motherboard />} />
        <Route path="/home/ram" element={<Ram />} />
        <Route path="/home/procesador" element={<Procesador />} />
        <Route path='/home/placa%20de%20video' element={<Navigate to="/home/Gpu" />} />
        <Route path='/home/memoria%20ram' element={<Navigate to="/home/Ram" />} />
        <Route path='/home/disco%20duro' element={<Navigate to="/home/Hdd" />} />
        <Route path='/home/motherboard' element={<Navigate to="/home/mother" />} />
        <Route path="/order" element={<Order/>}/>

      </Routes>




      <Foooter />


    </div>
  );
}

export default App;
