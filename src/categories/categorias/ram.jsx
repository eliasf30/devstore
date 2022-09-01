import CardProduct from "../../products/CardProducts";
import { products } from "../../products/products";
import "./categorias.css"

export default function Ram(){

    const productsfiltred = products.filter(product => product.category === "ram")


    return(
        <div className="categoria">
            <h2>Ram</h2>
            <div className="product_containter">
            {
               productsfiltred.map(product => <CardProduct key={product.id} {...product}/>)
            }
            
            </div>
        </div>
    )
}