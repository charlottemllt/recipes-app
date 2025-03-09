import { useContext } from 'react';

import { RecipesContext } from "../context/RecipesContext";

import RECIPES from '../config/recipes.json'

function Recipes(){
    // const [numberOfRecipes, setNumberOfRecipes] = useState(1)
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

    return (
        <>
            <h1>Recipes</h1>
            <div>Il y a {recipes.length} recettes</div>

            <div className="selectList">
                {
                    Array.from({length: recipes.length}, (x, i) => i).map( (indexSelect) => {
                        return <select key={`select-${indexSelect}`} name="recipes" onChange={(e) => updateRecipes(e, indexSelect)}>
                                    <option value="">-- Please choose a recipe --</option>
                                    {
                                        Object.keys(allRecipes).map( (recipeID) => {
                                            const recipeName = allRecipes[recipeID]["Name"]
                                            return <option value={recipeID} key={recipeID}>{recipeName}</option>
                                        })
                                    }
                                </select>
                    })
                }
            </div>
            
            {/* <div onClick={ () => {setNumberOfRecipes(numberOfRecipes - 1)}}>Delete</div> */}

            <button onClick={ () => addRecipe()}>Ajouter une recette</button>
        </>
    )
}

export default Recipes;