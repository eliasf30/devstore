import CardProduct from "../../products/CardProducts";
import { products } from "../../products/products";
import "./categorias.css"

export default function HDD(){

    const productsfiltred = products.filter(product => product.category === "Hdd")


    return(
        <div className="categoria">
            <h2>Hdd</h2>
            <div className="product_containter">
            {
                productsfiltred.map(product => <CardProduct key={product.id} {...product}/>)
            }
            
            </div>
        </div>
    )
}