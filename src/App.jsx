// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from "./pages/Homepage"
import RecipesBook from "./pages/RecipesBook"
import AddRecipe from "./pages/AddRecipe"
import RecipeDetails from "./pages/RecipeDetails"
import Header from "./components/Header";

import RECIPES from './config/recipes.json'
import INGREDIENTS from './config/recipes.json'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/recipes_book" element={<RecipesBook recipes={RECIPES} ingredients={INGREDIENTS}/>}></Route>
        <Route path="/new_recipe" element={<AddRecipe />}></Route>
        <Route path="/details/:indexRecipe" element={<RecipeDetails />}></Route>
      </Routes>
    </div>
  )
}

export default App
