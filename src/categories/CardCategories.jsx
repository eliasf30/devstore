import styled from "styled-components";
import "./categories.css"
import { Navigate, NavLink } from "react-router-dom";



const Box = styled.div`
width: 15%;
height: 25%;
background-color: #E2E2E2;
margin: 3%;
border: 1px solid orange;
color: orange
display: flex;


&:hover{
    cursor: pointer;
    width: 17%;
    height: 28%;
    transition:.5s;
}&:active{
    width: 15%;
    height: 25%; 
    transition: 0ms;   
}

`



export default function CardCategories({ img, title, category}){

   

    return(
        
        <Box>
            <NavLink className="card_navlink" to={category}>
            <h3 style={{color:"black",fontWeight:"400"}}>{title}</h3>
            <img  alt={title} src={img}/>
            </NavLink>
        </Box>
        
        
    )
}


