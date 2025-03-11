import { useContext } from 'react';

import { RecipesContext } from "../context/RecipesContext";

import RECIPES from '../config/recipes.json'

function Recipes(){
    const {recipes, setRecipes} = useContext(RecipesContext);
    const allRecipes = RECIPES

    function updateRecipes(e, indexSelect){
        let recipesCopy = [ ...recipes]
        recipesCopy[indexSelect] = {
            index: e.target.value,
            quantity: 1
        }
        setRecipes(recipesCopy)
    }
    
    function addRecipe(){
        let newRecipes = recipes.concat([{
            index: "001",
            quantity: 1
        }])
        setRecipes(newRecipes)
    }
    function deleteRecipe(index){
        let recipesCopy = [ ...recipes]
        recipesCopy.splice(index, 1);
        setRecipes(recipesCopy)
    }

    return (
        <div className="Recipes">
            <h1>Recipes</h1>
            <div className="selectList">
                {
                    Array.from({length: recipes.length}, (x, i) => i).map( (indexSelect) => {
                        return <div className="recipeItem" key={`recipe-${indexSelect}`}>
                                <select
                                    key={`select-${indexSelect}`}
                                    name="recipes"
                                    value={recipes[indexSelect]["index"]}
                                    onChange={(e) => updateRecipes(e, indexSelect)}
                                >
                                    <option value="">-- Please choose a recipe --</option>
                                    {
                                        Object.keys(allRecipes).map( (recipeID) => {
                                            const recipeName = allRecipes[recipeID]["Name"]
                                            return <option value={recipeID} key={recipeID}>{recipeName}</option>
                                        })
                                    }
                                </select>
                                <div onClick={ () => {deleteRecipe(indexSelect)}}>Delete</div>
                            </div>
                    })
                }
            </div>

            <button onClick={ () => addRecipe()}>Ajouter une recette</button>
        </div>
    )
}

export default Recipes;