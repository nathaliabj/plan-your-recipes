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
  NavWrapper,
  NavGroup,
  SiteNavWrapper,
  NavUnderline,
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
        <HeaderTitle>Yummy Planner</HeaderTitle>
        <NavWrapper>
          <NavGroup>
            <SiteNavWrapper>
              <SiteNav to="/my-recipes">My recipes</SiteNav>
              <NavUnderline />
            </SiteNavWrapper>

            <SiteNavWrapper>
              <SiteNav to="/shopping-list">Shopping list</SiteNav>
              <NavUnderline />
            </SiteNavWrapper>
          </NavGroup>
          <NavGroup>
            <SiteNavWrapper>
              <SiteNav to="/about-us">About us</SiteNav>
              <NavUnderline />
            </SiteNavWrapper>

            <SiteNavWrapper>
              <SiteNav to="/contact-us">Contact</SiteNav>
              <NavUnderline />
            </SiteNavWrapper>
          </NavGroup>
        </NavWrapper>
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
