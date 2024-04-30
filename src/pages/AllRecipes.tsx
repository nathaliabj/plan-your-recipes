import { RecipeCard } from "../components/RecipeCard";
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

interface Window {
  supertab: {
    createPurchaseButton: (params: {
      containerElement: HTMLElement;
      clientId: string;
      merchantLogoUrl: string;
      merchantName: string;
      // Purchase button label
      label?: string;
      // The optional offering id has to point to a single purchase offering
      // that is associated with the current client id.
      // It defaults to the first single purchase offering id.
      offeringId?: string;
      // Language to use for UI copy
      // Defaults to browser language and falls back to `en-US`
      language?: string;
      onPurchaseCompleted?: () => void;
      onPurchaseCanceled?: () => void;
      onError?: () => void;
    }) => { destroy: () => void };
  };
}

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
        <SiteNav to="/myRecipes">About us</SiteNav>

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
