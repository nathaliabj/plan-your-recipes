import { RecipeCard } from "../components/RecipeCard"
import { useEffect, useState } from "react";
import { api } from "../util/api";
import { Recipe } from "../types";
import { parseTheMealDBToRecipes } from "../util/helpers";

export const AllRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const { meals } = await api.theMealDB.getRecipes();
        const parsed = parseTheMealDBToRecipes(meals);
        setRecipes(parsed);
      } catch {
        console.log('Failed to fetch recipes');
      }
    }
    fetchRecipes();
  }, []);

  return(
    <>
      <header className="heading">
        All Recipes
      </header>
      <div className="grid-container">
        {recipes?.map(r => <RecipeCard recipe={r} key={`${r.id}-card`}/>)}
      </div>
    </>
  )
}