import RecipeCard from './../components/RecipeCard'

function RecipesBook(props){
    const recipes = props.recipes
    const recipes_cards = Object.keys(recipes).map( (index_recipe) => {
        return (
            <RecipeCard key={`recipe-${recipes[index_recipe]["ID"]}`} recipe={recipes[index_recipe]} />
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