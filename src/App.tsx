import React from "react";
import { AllRecipes } from "./pages/AllRecipes";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Recipe from "./pages/Recipe";
import { MyRecipes } from "./pages/MyRecipes";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllRecipes />} />
        </Route>
        <Route path="/recipes/:id" element={<Recipe />} />
        <Route path="/myRecipes" element={<MyRecipes />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
