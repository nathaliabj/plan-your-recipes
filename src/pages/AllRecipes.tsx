import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { MainNavBar } from "../components/NavBar";
import { api } from "../util/api";
import { parseTheMealDBToRecipes } from "../util/helpers";
import { Recipe } from "../types";
import { RecipeCardsGrid, CardLink } from "./AllRecipes.styles";
import { CenterText, EmptyState } from "./Pages.styles";

export const AllRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const { meals } = await api.theMealDB.getRecipes();
        const parsed = parseTheMealDBToRecipes(meals);
        setRecipes(parsed);
      } catch {
        console.log("Failed to fetch recipes");
      }
    };
    fetchRecipes();
  }, []);

  return (
    <>
      <MainNavBar />
      {recipes.length ? (
        <nav>
          <RecipeCardsGrid>
            {recipes.map((recipe) => (
              <CardLink key={recipe.id} to={`recipes/${recipe.id}`}>
                <RecipeCard recipe={recipe} key={`${recipe.id}-card`} />
              </CardLink>
            ))}
          </RecipeCardsGrid>
        </nav>
      ) : (
        <EmptyState>No Recipes available...</EmptyState>
      )}
    </>
  );
};
