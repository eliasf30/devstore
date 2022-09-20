import { useDispatch } from "react-redux"
import "./CardOrder.css"


export default function CardOrder({title,id,image,price,quantity}) {

    const dispatch = useDispatch()

    


    return (
        <div key={id} className="cardOrder" >
            <img style={{ width: "20%" }} src={image} />
            <h3 style={{ color: "#000000",width:"40%" }}>{title}</h3>
            <div style={{display:"flex",flexDirection:"column", marginLeft:"10%"}}>
                <h4 style={{ color: "#000000", fontSize:"1.2em",marginBottom:"10%", marginTop:"15%"  }}>{`$${price * quantity}`}</h4>
                <div style={{display:"flex",flexDirection:"row", alignItems:"center" }}>
                    <h4 style={{color:"#000000", fontSize:"1.2em"}}>Cantidad: {quantity}</h4>
                </div>
            </div>

        </div>
    )
}
