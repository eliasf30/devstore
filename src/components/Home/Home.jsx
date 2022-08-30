import CardCategories from "../../categories/CardCategories";
import "./Home.css"
import { Categories } from "../../categories/categories";


export default function Home() {
    return (
        <div className="home">
            <h2>categorias</h2>
            <div className="categories">

                {
                    Categories.map(category => 
                        <CardCategories key={category.id} {...category} />  )
                }
            </div>
        </div>
    )
}