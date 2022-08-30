import Navbar from './navbar/navbar';
import './App.css';
import {Route, Routes, Navigate, Link, NavLink} from "react-router-dom"
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


function App() {

  function NotFound(){
    return(
      <h1>error 404</h1>
    )}

  return (
    <div className="App">
      <nav>
      <Navbar/>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='*' element={<NotFound />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgot-password" element={<Forgotpassword/>}/>
        <Route path="/home/fuente" element={<Fuente/>}/>
        <Route path="/home/gabinete" element={<Gabinete/>}/>
        <Route path="/home/gpu" element={<Gpu/>}/>
        <Route path="/home/hdd" element={<Hdd/>}/>
        <Route path="/home/monitor" element={<Monitor/>}/>
        <Route path="/home/mother" element={<Motherboard/>}/>
        <Route path="/home/ram" element={<Ram/>}/>
        <Route path="/home/procesador" element={<Procesador/>}/>

      </Routes>



      
      <Foooter/>


    </div>
  );
}

export default App;
