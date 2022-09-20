import styled from "styled-components";
import "./cardproduct.css"
import { useDispatch } from "react-redux";
import { addProduct } from '../redux/cart-actions';

const Box = styled.div`
width: 40%;
height: 42%;
font-size: .9em;
text-decoration: none;
background-color: white;
margin: 3%;
border: 1px solid orange;
color: orange
display: flex;



&:hover{
    cursor: pointer;
    width: 42%;
    height: 44%;
    transition:.5s;
}


`





export default function CardProduct({ id, image, title, price }) {

    const dispatch = useDispatch();

    return (
        <Box>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <img style={{ width: "30%", margin: "3%" }} alt={title} src={image} />
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"100%" }}>
                    <h4 className="product_price">{`$${price}`}</h4>
                    <button  onClick={e => dispatch(addProduct({ title, image,  price, id }))} className="card_button">Agregar al carrito!</button>
                </div>
            </div>
            <h3 className="product_title">{title}</h3>
        </Box>
    )
};