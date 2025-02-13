import { Link } from "react-router-dom";

function RecipeDetails(){
    return (
        <div className="RecipeDetails">
            <Link to="/recipes_book">
                <div>Retour</div>
            </Link>
            <h1>Details</h1>
        </div>
    )
}

export default RecipeDetails;