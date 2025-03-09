import { useContext, useEffect } from 'react';

import { RecipesContext } from "../context/RecipesContext";

import RECIPES from '../config/recipes.json'

function Basket(){
    const {recipes, setRecipes} = useContext(RecipesContext);
    const allRecipes = RECIPES

    return (
        <>
            <h1>Basket</h1>
            <div>Vous avez choisi:</div>
            {
                recipes.map( (recipeObj, index) => {
                    const idSelected = recipeObj["index"]
                    return <div key={index}>{recipeObj["quantity"]} {allRecipes[idSelected]["Name"]}</div>
                })
            }
        </>
    )
}

export default Basket;