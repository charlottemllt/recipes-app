// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from "./Homepage"
import RecipesBook from "./RecipesBook"
import Header from "./Header";

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/recipes_book" element={<RecipesBook />}></Route>
      </Routes>
    </div>
  )
}

export default App
