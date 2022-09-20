import CardProduct from "../../products/CardProducts";
import { products } from "../../products/products";
import "./categorias.css"

export default function Gpu(){

    const productsfiltred = products.filter(product => product.category === "Gpu")


    return(
        <div className="categoria">
            <h2>Placas De Video</h2>
            <div className="product_containter">
            {
                productsfiltred.map(product => <CardProduct key={product.id} {...product}/>)
            }
            
            </div>
        </div>
    )
}