import { AllRecipes } from "./pages/AllRecipes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Recipe from "./pages/Recipe";
import MyRecipes from "./pages/MyRecipes";
import About from "./pages/About";
import ShoppingList from "./pages/ShoppingList";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllRecipes />} />
        </Route>
        <Route path="/recipes/:id" element={<Recipe />} />
        <Route path="/my-recipes" element={<MyRecipes />} />
        <Route path="/shopping-list" element={<ShoppingList />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
