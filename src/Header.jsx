import { Link } from "react-router-dom";
import { FaShoppingBasket, FaBook } from "react-icons/fa";

function Header(){
    return (
        <div>
            <h1>RecetteBasket</h1>
            <nav>
                <Link to="/" className="nav-item">
                    <FaShoppingBasket />Courses
                </Link>
                <Link to="/recipes_book" className="nav-item">
                <FaBook />Livre de Recettes
                </Link>
            </nav>
        </div>        
    )
}

export default Header;