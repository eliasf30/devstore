import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import "./order.css"
import CardOrder from "./cardOrder/cardOrder"

export default function Order(){

    const {user} = useSelector(state => state.user)
    const navigate = useNavigate()
  
  
    useEffect(() => {
      if(!user) {
        navigate("/")
      }
    
    },[user, navigate])
  
    const {items, totalcost} = useSelector(state => state.cart)

    const random = Math.floor(Math.random()* 100000000000)

    return( 
    
    <div  className="order_div"> 
        <h2 style={{color:"green"}}> Gracias por elegirnos, tu pedido ya esta reservado!</h2>
        <h3 style={{fontSize:"1.5em"}}> Tu nro de pedido es: {random}</h3>
        <h4 style={{color:"green",fontSize:"1.3em", fontWeight:"100"}}>Tu pedido sera reservado por las proximas 72 horas, podes pasar a retirarlo en "Av. Vélez Sarsfield 361, X5000JJD Córdoba" entre las 8 a las 22hs!</h4>
        <div className='order_products_div'>

                    {items.length ? (
                        items.map(item => <CardOrder key={item.id} {...item} />)
                    ) : (
                        <h3 className='noProductH3'>Aca van tus productos...</h3>
                    )}

                </div>
        <h3 style={{fontSize:"1.5em"}} >el costo total es: ${totalcost}</h3>
        
    </div>
    
    )}