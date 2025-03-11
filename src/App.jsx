// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import {RecipesContextProvider} from "./context/RecipesContext";
import Homepage from "./pages/Homepage"
import RecipesBook from "./pages/RecipesBook"
import NewRecipe from "./pages/NewRecipe"
import RecipeDetails from "./pages/RecipeDetails"
import Header from "./components/Header";

function App() {

  return (
    <div className="App">
      <RecipesContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/recipes_book" element={<RecipesBook />}></Route>
          <Route path="/new_recipe" element={<NewRecipe />}></Route>
          <Route path="/details/:indexRecipe" element={<RecipeDetails />}></Route>
        </Routes>
      </RecipesContextProvider>
    </div>
  )
}

export default App
