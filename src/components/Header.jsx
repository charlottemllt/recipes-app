import { Link } from "react-router-dom";
import { GiBasket, GiOpenBook, GiCookingPot } from "react-icons/gi";
import NavItem from "./NavItem"

function Header(){
    return (
        <div className="Header">
            <div className="appTitle">RecetteBasket</div>
            <nav>
                <Link to="/" className="nav-item">
                    <NavItem icon={<GiBasket className="icon" />} selected={true} text="Courses" />
                </Link>
                <Link to="/recipes_book" className="nav-item">
                    <NavItem icon={<GiOpenBook className="icon" />} selected={false} text="Livre de Recettes" />
                </Link>
                <Link to="/new_recipe" className="nav-item">
                    <NavItem icon={<GiCookingPot className="icon" />} selected={false} text="Ajouter une recette" />
                </Link>
            </nav>
        </div>        
    )
}

export default Header;