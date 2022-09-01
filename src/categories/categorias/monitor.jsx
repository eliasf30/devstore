import CardProduct from "../../products/CardProducts";
import { products } from "../../products/products";
import "./categorias.css"

export default function Monitor(){

    const productsfiltred = products.filter(product => product.category === "monitor")


    return(
        <div className="categoria">
            <h2>Monitor</h2>
            <div className="product_containter">
            {
                productsfiltred.map(product => <CardProduct key={product.id} {...product}/>)
            }
            
            </div>
        </div>
    )
}