import RecipeCard from './../components/RecipeCard'

import RECIPES from '../config/recipes.json'

function RecipesBook(){
    const recipes_cards = Object.keys(RECIPES).map( (index_recipe) => {
        return (
            <RecipeCard key={`recipe-${RECIPES[index_recipe]["ID"]}`} recipe={RECIPES[index_recipe]} />
        )   
    })

    return (
        <div className="RecipesBook">
            <h1>Mon Livre de Recettes</h1>
            <div className="recipesList">
                {recipes_cards}
                <RecipeCard key="add-a-new-recipe" recipe={{"Name": "add-a-new-recipe"}} />
            </div>
        </div>
    )
}

export default RecipesBook;