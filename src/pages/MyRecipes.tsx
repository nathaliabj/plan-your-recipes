import { FC, useEffect, useState } from "react";
import { SecondaryNavBar } from "../components/NavBar";
import RecipeCard from "../components/RecipeCard";
import { Recipe } from "../types";

import {
  CardLink,
  RecipeCardsGrid,
} from "./AllRecipes.styles";
import {
  ContentWrapper,
  CenterText,
} from "./Pages.styles";

const MyRecipes: FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

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
        <SecondaryNavBar />
      </header>

      <ContentWrapper>
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
