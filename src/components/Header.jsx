import { Link } from "react-router-dom";
import { useState } from 'react';

import { GiBasket, GiOpenBook, GiCookingPot } from "react-icons/gi";
import NavItem from "./NavItem"

function Header(){
    const [pageSelected, setPage] = useState("basket")

    function setPageAsBasket(){
        setPage("basket")
    }
    function setPageAsRecipes(){
        setPage("recipes")
    }
    function setPageAsAddRecipe(){
        setPage("add_recipe")
    }

    return (
        <div className="Header">
            <div className="appTitle">RecetteBasket</div>
            <nav>
                <Link to="/" className="nav-item" onClick={setPageAsBasket}>
                    <NavItem
                        icon={<GiBasket className="icon" />}
                        selected={pageSelected === "basket"}
                        text="Courses" />
                </Link>
                <Link to="/recipes_book" className="nav-item" onClick={setPageAsRecipes}>
                    <NavItem
                        icon={<GiOpenBook className="icon" />}
                        selected={pageSelected === "recipes"}
                        text="Livre de Recettes" />
                </Link>
                <Link to="/new_recipe" className="nav-item" onClick={setPageAsAddRecipe}>
                    <NavItem
                        icon={<GiCookingPot className="icon" />}
                        selected={pageSelected === "add_recipe"}
                        text="Ajouter une recette" />
                </Link>
            </nav>
        </div>        
    )
}

export default Header;