import { useState } from 'react';

// import { RecipesContextProvider } from "../context/RecipesContext";
import Recipes from "../components/Recipes";
import Basket from "../components/Basket";

function Homepage(){
    const [pageSelected, setPage] = useState("recipes")

    function setPageAsBasket(){
        setPage("basket")
    }
    function setPageAsRecipes(){
        setPage("recipes")
    }

    return (
        <div className="Homepage">
            <nav>
                <div onClick={() => setPageAsRecipes()}>Mes Recettes</div>
                <div onClick={() => setPageAsBasket()}>Liste de Courses</div>
            </nav>
            {pageSelected === "recipes" && <Recipes />}
            {pageSelected === "basket" && <Basket />}
        </div>
    )
}

export default Homepage;