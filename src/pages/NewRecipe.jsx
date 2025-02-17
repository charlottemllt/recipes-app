import { useState } from 'react'

import { PiOvenFill } from "react-icons/pi";
import { TbSeeding, TbSalad } from "react-icons/tb";
import { BiTimer } from "react-icons/bi";
import { FaTrashCan } from "react-icons/fa6";

import { IoMdArrowRoundBack, IoMdAdd } from "react-icons/io";

const TAG_ICONS = {
    "Au four": {
        "ID": "icon-01",
        "icon": <PiOvenFill />
    },
    "Rapide": {
        "ID": "icon-02",
        "icon": <BiTimer />
    },
    "Végétarien": {
        "ID": "icon-03",
        "icon": <TbSeeding />
    },
    "Salade": {
        "ID": "icon-04",
        "icon": <TbSalad />
    }
}

function NewRecipe(){
    const [ingredients, setIngredients] = useState([{
        "ID": 0,
        "value": undefined,
        "ingredient": undefined
    }])
    const [steps, setSteps] = useState([""])

    function addIngredient(){
        const ingredientsUpdated = ingredients
        ingredientsUpdated.push({
            "ID": ingredients.length,
            "value": undefined,
            "ingredient": undefined
        })
        setIngredients(ingredientsUpdated)
    }

    function deleteIngredient(e){
        const idToDelete = e.target.id
        // TODO: delete the current element + change the ids of each 
        // OR renseigner l'ID comme max(IDs)+1 et pas comme la longueur de la liste (useState compteur)
    }

    function addStep(){
        console.log("addd step")
        const stepsUpdated = steps
        stepsUpdated.push("")
        setSteps(stepsUpdated)
    }

    function deleteStep(){
        console.log("delete step")
    }

    return (
        <div className="NewRecipe">
            <input className="recipeTitle" placeholder="Ajouter le nom de la recette"></input>
            <div className="tagsSelection">
                {Object.keys(TAG_ICONS).map( (tag) => {
                    return (
                        <div className="tagItem" key={TAG_ICONS[tag]["ID"]}>
                            {TAG_ICONS[tag]["icon"]}
                            <span className="tagLabel">{tag}</span>
                            <input type="checkbox" className="checkbox"></input>
                        </div>
                    )
                })}
            </div>
            <div className="imageImport">
                {/* <div className="imageSubdivision"> */}
                    <IoMdAdd className="addImageIcon"/>
                {/* </div> */}
            </div>
            <div className="recipeInfos">
                <div className="recipePreparation">
                    <div className="detailsSubtitle">Preparation :</div>
                    <div className="preparationTime">
                        <input type="number"></input>
                        <span>minutes</span>
                    </div>
                </div>
                <div className="recipeIngredients">
                    <div className="detailsSubtitle">Ingrédients :</div>
                    <div className="peopleNumber">
                        <span>Pour</span>
                        <input type="number"></input>
                        <span>personnes</span>
                    </div>
                    <div className="ingredientsList">
                        {
                            ingredients.map( (ingredient) => {
                                return (
                                    <div className="ingredientItem" key={ingredient["ID"]}>
                                        <input type="number"></input>
                                        <select>
                                            <option>Ing 1</option>
                                            <option>Ing 2</option>
                                        </select>
                                        <span onClick={deleteIngredient} id={ingredient["ID"]}><FaTrashCan /></span>
                                    </div>
                                )
                            })

                        }
                        <span className='addIngredient' onClick={addIngredient}>+</span>
                    </div>
                </div>
            </div>
            <div className="recipeDetails">
                <h3>Recette</h3>
                {
                    steps.map( (step, idx) => {
                        return (
                            <div className="stepItem" key={idx}>
                                <textarea></textarea>
                                {/* // TODO: change the key */}
                                <span onClick={deleteStep} id={idx}><FaTrashCan /></span>
                            </div>
                        )
                    })
                }
                <span className='addStep' onClick={addStep}>+</span>
            </div>
            <div className="addRecipeBtn Btn">
                Ajouter
            </div>
        </div>
    )
}

export default NewRecipe;