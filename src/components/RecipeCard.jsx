import { Link } from "react-router-dom";
import { IoIosAddCircle, IoIosAdd } from "react-icons/io";
import { FaEye } from "react-icons/fa";

function addRecipe(){
    console.log("add the recipe")
}
function seeRecipeDetails(){
    console.log("see the recipe details")
}
function addNewRecipe(){
    console.log("add a new recipe")
}

function RecipeCard(props){
    const name = props.recipe["Name"]
    if (name == "add-a-new-recipe"){
        return (
            <Link to="/new_recipe" className="RecipeCard">
                <IoIosAdd className="addNewRecipe recipeItem" onClick={addNewRecipe} />
            </Link>
        )
    }
    else{
        return (
            <Link to={`/details/${props.recipe["ID"]}`} className="RecipeCard">
                <div className="recipeItem" key={`recipe-item-${props.recipe["ID"]}`}>{name}</div>
                <FaEye className="seeRecipeBtn" onClick={seeRecipeDetails} />
                <IoIosAddCircle className="addRecipeBtn" onClick={addRecipe} />
            </Link>
        )
    }
}

export default RecipeCard;