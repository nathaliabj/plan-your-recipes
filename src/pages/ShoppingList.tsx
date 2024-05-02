import { FC, useEffect, useState } from "react";
import { SecondaryNavBar } from "../components/NavBar";
import { Recipe } from "../types";
import { api } from "../util/api";
import { getAllPermissions, parseTheMealDBToRecipe } from "../util/helpers";
import {
  ContentWrapper,
  CenterText,
  CheckBox,
  ShoppingListWrapper,
  PageTitleWrapper,
  PageTitle,
  TitleUnderline,
  ListWrapper,
  ListLabel,
} from "./Pages.styles";

const ShoppingList: FC = () => {
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

  const ingredients = recipes
    .slice(0, 4)
    .map((recipe) => recipe.ingredients)
    .map((ingredient) =>
      ingredient.map((ingredient) => ingredient.name.toLocaleLowerCase())
    )
    .flat();

  const removeDuplicates = (arr: any[]) => {
    const uniqueItems = new Set(arr);
    return Array.from(uniqueItems);
  };

  const shoppingList = removeDuplicates(ingredients);

  return (
    <>
      <header>
        <SecondaryNavBar />
      </header>
      {shoppingList.length ? (
        <>
          <ContentWrapper>
            <PageTitleWrapper>
              <PageTitle>Your Shopping List</PageTitle>
              <TitleUnderline />
            </PageTitleWrapper>

            <ShoppingListWrapper>
              {shoppingList.map((item, i) => (
                <ListWrapper>
                  <CheckBox
                    type="checkbox"
                    id={item + i}
                    name={item}
                    value={item}
                  />
                  <ListLabel htmlFor={item + i}>
                    {`${item.charAt(0).toUpperCase()}${item.slice(1)}`}
                  </ListLabel>
                </ListWrapper>
              ))}
            </ShoppingListWrapper>
          </ContentWrapper>
        </>
      ) : (
        <ContentWrapper>
          <CenterText>
            You don't have any items on your shopping list.
          </CenterText>
        </ContentWrapper>
      )}
    </>
  );
};

export default ShoppingList;
