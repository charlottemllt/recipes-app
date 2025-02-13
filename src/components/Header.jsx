import { Link } from "react-router-dom";
// import { FaShoppingBasket, FaBook } from "react-icons/fa";
import Book from "./../assets/book.png"
// import fullBook from "./../assets/book-full.png"
// import Basket from "./../assets/basket.png"
import fullBasket from "./../assets/basket-full.png"
import NavItem from "./NavItem"

function Header(){
    return (
        <div className="Header">
            <div className="appTitle">RecetteBasket</div>
            <nav>
                <Link to="/" className="nav-item">
                    <NavItem img={fullBasket} selected={true} text="Courses" />
                </Link>
                <Link to="/recipes_book" className="nav-item">
                    <NavItem img={Book} selected={false} text="Livre de Recettes" />
                </Link>
                <Link to="/new_recipe" className="nav-item">
                    <NavItem img={Book} selected={false} text="Ajouter une recette" />
                </Link>
            </nav>
            {/* <nav>
                <Link to="/" className="nav-item">
                    <NavItem img={Basket} selected={false} text="Courses" />
                </Link>
                <Link to="/recipes_book" className="nav-item">
                    <NavItem img={fullBook} selected={true} text="Livre de Recettes" />
                </Link>
            </nav> */}
        </div>        
    )
}

export default Header;