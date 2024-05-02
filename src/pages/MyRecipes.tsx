import { FC, useEffect, useState } from "react";
import { SecondaryNavBar } from "../components/NavBar";
import RecipeCard from "../components/RecipeCard";
import { Recipe } from "../types";
import { api } from "../util/api";
import { getAllPermissions, parseTheMealDBToRecipe } from "../util/helpers";

import { CardLink, RecipeCardsGrid } from "./AllRecipes.styles";
import {
  ContentWrapper,
  CenterText,
  PageTitleWrapper,
  PageTitle,
  TitleUnderline,
} from "./Pages.styles";

const MyRecipes: FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const purchasedRecipes = getAllPermissions();
    const purchasedRecipeIds = purchasedRecipes.map((id) =>
      id.replace("recipe-", "")
    );

    (async () => {
      const recipes = await Promise.all(
        purchasedRecipeIds.map(async (id) => {
          try {
            const { meals } = await api.theMealDB.getRecipe(id);
            return parseTheMealDBToRecipe(meals[0]) || null;
          } catch {
            console.log("Failed to fetch recipe");
          }
        })
      );

      setRecipes(recipes.filter((recipe) => !!recipe) as Recipe[]);
    })();
  }, []);

  return (
    <>
      <header>
        <SecondaryNavBar />
      </header>

      <ContentWrapper>
        <nav>
          <PageTitleWrapper>
            <PageTitle>Your saved recipes</PageTitle>
            <TitleUnderline />
          </PageTitleWrapper>
          {recipes.length ? (
            <RecipeCardsGrid>
              {recipes.map((recipe) => (
                <CardLink key={recipe.id} to={`/recipes/${recipe.id}`}>
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
