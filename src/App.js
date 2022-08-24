import Navbar from './navbar/navbar';
import './App.css';
import {Route, Routes, Navigate, Link, NavLink} from "react-router-dom"
import Home from './components/Home/Home.jsx';
import Register from './components/Login/Register.jsx'


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
        <Route path="register" element={<Register/>}/>
      </Routes>

    



    </div>
  );
}

export default App;
