import { Link } from "react-router-dom";import { useContext } from 'react';

import { RecipesContext } from "../context/RecipesContext";
import { IoIosAddCircle, IoIosAdd } from "react-icons/io";
import { FaEye } from "react-icons/fa";

function RecipeCard(props){
    const {recipes, setRecipes} = useContext(RecipesContext);
    const name = props.recipe["Name"]

    function addRecipe(){
        let recipesCopy = recipes.concat([{
            index: props.recipe["ID"],
            quantity: 1
            }]
        )
        setRecipes(recipesCopy)
    }
    if (name == "add-a-new-recipe"){
        return (
            <Link to="/new_recipe" className="RecipeCard new">
                <IoIosAdd className="addNewRecipe recipeItem" />
            </Link>
        )
    }
    else{
        return (
            <div className="RecipeCard">
                <div className="recipeItem" key={`recipe-item-${props.recipe["ID"]}`}>{name}</div>
                <Link to={`/details/${props.recipe["ID"]}`}>
                    <FaEye className="seeRecipeBtn" />
                </Link>
                <IoIosAddCircle className="addRecipeBtn" onClick={addRecipe} />
            </div>
        )
    }
}

export default RecipeCard;