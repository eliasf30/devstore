import CardProduct from "../../products/CardProducts";
import { products } from "../../products/products";
import "./categorias.css"

export default function Motherboard(){

    const productsfiltred = products.filter(product => product.category === "mother")


    return(
        <div className="categoria">
            <h2>Motherboard</h2>
            <div className="product_containter">
            {
                productsfiltred.map(product => <CardProduct key={product.id} {...product}/>)
            }
            
            </div>
        </div>
    )
}