import { Link } from "react-router-dom";

import { PiOvenFill } from "react-icons/pi";
import { IoMdArrowRoundBack } from "react-icons/io";

const TAG_ICONS = {
    "Four": <PiOvenFill />
}

const recipe = {
    "ID": "003",
    "Name": "Cuisse de poulet et légumes rôtis au thym",
    "Nombre de personnes": 2,
    "Tags": ["Four"],
    "Ingrédients": {
        "poivron rouge": 1,
        "courgette": 1,
        "tomates cerises": 250,
        "cuisse de poulet": 2,
        "thym séché": 2,
        "farfalle": 140,
        "copeaux de grana padano": 40,
        "huile d'olive": 1.5,
        "beurre": 1
    },
    "Temps": 90
}

function RecipeDetails(){
    return (
        <div className="RecipeDetails">
            <Link className="BackBtn" to="/recipes_book">
                <IoMdArrowRoundBack />
                <div>Retour</div>
            </Link>
            <h2>{recipe["Name"]}</h2>
            <div className="recipeTags">
                {recipe["Tags"].map( (tag) => {
                    return TAG_ICONS[tag]
                })}
            </div>
            <img src="https://picsum.photos/200"></img>
            <div className="recipeInfos">
                <div className="recipePreparation">
                    <div>Preparation :</div>
                    <div>{`${recipe["Temps"]} minutes`}</div>
                </div>
                <div className="recipeIngredients">
                    <div>Ingrédients :</div>
                    <div>
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
                <div className="recipeDetails">
                    <h3>Recette</h3>
                    <div>1. Dans un grand bol, mélangez la farine d'épeautre avec le sel et les herbes aromatiques ou épices si vous en utilisez</div>
                    <div>2. Dans un autre bol, battez l'œuf puis ajoutez le lait d'amande et l'huile d'olive. Mélangez bien.</div>
                    <div>3. Versez le mélange liquide dans le bol de farine d'épeautre et mélangez jusqu'à obtenir une pâte homogène. Si la pâte est trop épaisse, ajoutez un peu plus de lait d'amande.</div>
                    <div>4. Faites chauffer une poêle légèrement huilée à feu moyen.</div>
                </div>
                <div>
                    Ajouter à la liste
                </div>
                <Link to="/recipes_book" className="nav-item">
                    Voir toutes les recettes
                </Link>
            </div>
        </div>
    )
}

export default RecipeDetails;