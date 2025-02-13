// import { Routes, Route, Link } from "react-router-dom";
import Recipes from "../components/Recipes";
import Basket from "../components/Basket";

function Homepage(){
    return (
        <div className="Homepage">
            <nav>
                <div>Mes Recettes</div>
                <div>Liste de Courses</div>
            </nav>
            <Recipes />
            <Basket />
            {/* <nav>
                <Link to="/recipes" className="nav-item">Mes Recettes</Link>
                <Link to="/basket" className="nav-item">Ma liste de courses</Link>
            </nav>
            <Routes>
                <Route path="/recipes" element={<Recipes />}></Route>
                <Route path="/basket" element={<Basket />}></Route>
            </Routes> */}
        </div>
    )
}

export default Homepage;