// import { Routes, Route, Link } from "react-router-dom";
import Recipes from "./Recipes";
import Basket from "./Basket";

function Homepage(){
    return (
        <div>
            <nav>
                <div>Mes Recettes</div>
                <div>Ma liste de courses</div>
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