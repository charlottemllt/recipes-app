import { Link, useParams } from "react-router-dom";

import { PiOvenFill } from "react-icons/pi";
import { TbSeeding, TbSalad } from "react-icons/tb";
import { BiTimer } from "react-icons/bi";
import { IoMdArrowRoundBack } from "react-icons/io";

import RECIPES from './../config/recipes.json'

const TAG_ICONS = {
    "Au four": {
        "ID": "icon-01",
        "icon": <PiOvenFill />
    },
    "Rapide": {
        "ID": "icon-01",
        "icon": <BiTimer />
    },
    "Végétarien": {
        "ID": "icon-01",
        "icon": <TbSeeding />
    },
    "Salade": {
        "ID": "icon-01",
        "icon": <TbSalad />
    }
}

function RecipeDetails(){
    const recipeID = useParams()
    const recipe = RECIPES[recipeID["indexRecipe"]]
    return (
        <div className="RecipeDetails">
            <Link className="BackBtn" to="/recipes_book">
                <IoMdArrowRoundBack />
                <div className="backText">Retour</div>
            </Link>
            <h2>{recipe["Name"]}</h2>
            <div className="recipeTags">
                {recipe["Tags"].map( (tag) => {
                    return TAG_ICONS[tag]["icon"]
                })}
            </div>
            <img className="recipeImage" src="https://picsum.photos/640/360"></img>
            <div className="recipeInfos">
                <div className="recipePreparation">
                    <div className="detailsSubtitle">Preparation :</div>
                    <div className="preparationTime">{`${recipe["Temps"]} minutes`}</div>
                </div>
                <div className="recipeIngredients">
                    <div className="detailsSubtitle">Ingrédients :</div>
                    <div className="ingredientsList">
                        {Object.keys(recipe["Ingrédients"]).map( (ing, index_ing) => {
                            return (
                                <div className="ingredientItem" key={`ing_${index_ing}`}>
                                    {/* change key for an id of the ingredients later */}
                                    {ing}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="recipeDetails">
                <h3>Recette</h3>
                <div className="recipeStep">
                    <div className="stepNumber">1.</div>
                    <div className="stepDescription">Dans un grand bol, mélangez la farine d'épeautre avec le sel et les herbes aromatiques ou épices si vous en utilisez</div>
                </div>
                <div className="recipeStep">
                    <div className="stepNumber">2.</div>
                    <div className="stepDescription">Dans un autre bol, battez l'œuf puis ajoutez le lait d'amande et l'huile d'olive. Mélangez bien.</div>
                </div>
                <div className="recipeStep">
                    <div className="stepNumber">3.</div>
                    <div className="stepDescription">Versez le mélange liquide dans le bol de farine d'épeautre et mélangez jusqu'à obtenir une pâte homogène. Si la pâte est trop épaisse, ajoutez un peu plus de lait d'amande.</div>
                </div>
                <div className="recipeStep">
                    <div className="stepNumber">4.</div>
                    <div className="stepDescription">Faites chauffer une poêle légèrement huilée à feu moyen.</div>
                </div>
            </div>
            <div className="addRecipeBtn Btn">
                Ajouter à la liste
            </div>
            <Link to="/recipes_book" className="allRecipesBtn Btn">
                Voir toutes les recettes
            </Link>
        </div>
    )
}

export default RecipeDetails;