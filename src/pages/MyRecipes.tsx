import { FC, useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

import {
  CardLink,
  NavGroup,
  NavUnderline,
  RecipeCardsGrid,
  SiteNav,
  SiteNavWrapper,
} from "./AllRecipes.styles";
import {
  TitleContainer,
  RecipeNavWrapper,
  HeaderTitle,
  ContentWrapper,
  CenterText,
} from "./Pages.styles";
import { RecipeProps } from "./Recipe";

const MyRecipes: FC = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const hasItems = localStorage.getItem("recipes") !== null;
    const recipes =
      hasItems && JSON.parse(localStorage.getItem("recipes") || "");
    if (recipes) {
      setRecipes(recipes);
    }
  }, []);

  console.log({ recipes });

  return (
    <>
      <header>
        <RecipeNavWrapper>
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
          <TitleContainer to="/">
            <HeaderTitle>Yummy planner</HeaderTitle>
          </TitleContainer>
          <NavGroup>
            <SiteNavWrapper>
              <SiteNav to="/about-us">About us</SiteNav>
              <NavUnderline />
            </SiteNavWrapper>

            <SiteNavWrapper>
              <SiteNav to="/contact-us">Contact us</SiteNav>
              <NavUnderline />
            </SiteNavWrapper>
          </NavGroup>
        </RecipeNavWrapper>
      </header>

      <ContentWrapper>
        <nav>
          {recipes.length ? (
            <RecipeCardsGrid>
              {recipes.map((recipe: RecipeProps) => (
                <CardLink key={recipe.id} to={`recipes/${recipe.id}`}>
                  <RecipeCard recipe={recipe} key={`${recipe.id}-card`} />
                </CardLink>
              ))}
            </RecipeCardsGrid>
          ) : (
            <CenterText>
              You have not yet purchased any recipe, start saving your favourite
              ones!
            </CenterText>
          )}
        </nav>
      </ContentWrapper>
    </>
  );
};

export default MyRecipes;
