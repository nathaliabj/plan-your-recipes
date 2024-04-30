import RecipeCard from "../components/RecipeCard";
import { useEffect, useState } from "react";
import { api } from "../util/api";
import { Recipe } from "../types";
import { parseTheMealDBToRecipes } from "../util/helpers";
import cook from "../assets/images/cook.jpg";
import "https://js.supertab.co/v1/tab.js";
import {
  RecipeCardsGrid,
  CardLink,
  HeaderContainer,
  HeaderBackground,
  HeaderTitle,
  SiteNav,
} from "./AllRecipes.styles";

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
      <HeaderContainer>
        <SiteNav to="/myRecipes">My recipes</SiteNav>
        <SiteNav to="/myRecipes">Shopping list</SiteNav>
        {/* <SiteNav to="/myRecipes">About us</SiteNav> */}

        <HeaderTitle>Yummy Planner</HeaderTitle>
        <HeaderBackground src={cook} alt="kitchen" />
      </HeaderContainer>
      <nav>
        {recipes.length ? (
          <RecipeCardsGrid>
            {recipes.map((recipe) => (
              <CardLink key={recipe.id} to={`recipes/${recipe.id}`}>
                <RecipeCard recipe={recipe} key={`${recipe.id}-card`} />
              </CardLink>
            ))}
          </RecipeCardsGrid>
        ) : (
          <p>
            <i>No Recipes available</i>
          </p>
        )}
      </nav>
    </>
  );
};
