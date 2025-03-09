import { useContext, useEffect } from 'react';

import { RecipesContext } from "../context/RecipesContext";

import RECIPES from '../config/recipes.json'
import INGREDIENTS from '../config/ingredients.json'

function Basket(){
    const {recipes, setRecipes} = useContext(RecipesContext);
    const allRecipes = RECIPES

    let aggRecipes = {}
    recipes.forEach( (recipe, index) => {
        const recipeID = recipes[index]["index"]
        if (Object.keys(aggRecipes).includes(recipeID)){
            aggRecipes[recipeID]["quantity"] += recipes[index]["quantity"]
        }
        else[
            aggRecipes[recipeID] = {
                "quantity": recipes[index]["quantity"]
            }
        ]
    })

    let basketList = {}
    Object.keys(aggRecipes).forEach( (recipeID) => {
        const quantity = aggRecipes[recipeID]["quantity"]
        const ingredients = allRecipes[recipeID]["Ingrédients"]
        Object.keys(ingredients).forEach( (ing) => {
            if (Object.keys(basketList).includes(ing)){
                basketList[ing] += quantity * ingredients[ing]
            }
            else{
                basketList[ing] = quantity * ingredients[ing]
            }
        })
    })
    

    return (
        <>
            <h1>Basket</h1>
            <div>Voici votre liste de courses :</div>
            {
                Object.keys(basketList).map( (ing, index) => {
                    const quantity = basketList[ing]
                    const ingObj = INGREDIENTS[ing]
                    return <div key={index}>{quantity} {ingObj["unité"]}{quantity > 1 ? ingObj["pluriel"] : ingObj["singulier"]}</div>
                })
            }
        </>
    )
}

export default Basket;