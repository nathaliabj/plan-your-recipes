import { FC, useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Ingredient } from "../types";
import { api } from "../util/api";
import { grantPermission, isPermissionGranted, parseTheMealDBToRecipes } from "../util/helpers";
import { HeaderBackground, HeaderContainer, HeaderTitle } from "./AllRecipes.styles";
import { BluredLi, CenterText, NoPermissionContainer, RecipeBodyContainer, RecipeHeaderBackground } from "./Recipe.styles";
import cook from "../assets/images/cook.jpg";
interface RecipeProps {
  id?: string;
  name: string;
  description?: string;
  category?: string;
  ingredients: Ingredient[];
  instructions: string;
  image?: string;
  video?: string;
}

const Recipe: FC = () => {
  const [recipe, setRecipe] = useState<RecipeProps>();
  const { id } = useParams();
  const [hasPermission, setHasPermission] = useState(isPermissionGranted(id));

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const { meals } = await api.theMealDB.getRecipe(id);
        setRecipe(parseTheMealDBToRecipes(meals)[0]);
      } catch {
        console.log("Failed to fetch recipe");
      }
    };
    fetchRecipe();
  }, []);

  useEffect(() => {
    const cow = document.getElementById("purchase-button-container");
    if (cow && cow.childElementCount === 0 && recipe) {
      (window as any).supertab?.createPurchaseButton({
        containerElement: document.getElementById("purchase-button-container")!,
        clientId: "client.cbe31267-317e-4ca5-bc66-aca83ce27d1d",
        merchantLogoUrl: "https://www.resumegpt.ai/logo.svg",
        merchantName: "Yummy recipes",
        offeringId: "offering.a05c3fad-b9d0-440a-9331-25e3f1b3be9c",
        onPurchaseCompleted: () => {
          grantPermission(id);
          setHasPermission(true);
        },
        onPurchaseCanceled: () => {
          console.log('purhcased canceled');
        },
        onError: () => {
          console.log('error making purchase');
        },
      });
    }
    }, [recipe]);
  
  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <HeaderContainer>
      <HeaderTitle>Yummy Planner</HeaderTitle>
        <RecipeHeaderBackground src={recipe?.image} alt={recipe?.name} />
      </HeaderContainer>
      {hasPermission
        ? <RecipeBodyContainer>
            <h1>{recipe.name}</h1>
            <p>{recipe.category}</p>
            <h2>Ingredients</h2>
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient.name}>
                  {ingredient.quantity} - {ingredient.name}
                </li>
              ))}
            </ul>
            <p>{recipe.instructions}</p>
          </RecipeBodyContainer>
        : <NoPermissionContainer>
            <h1>{recipe.name}</h1>
              <p>{recipe.category}</p>
              <h2>Ingredients</h2>
              <ul>
                {recipe.ingredients.slice(0, 6).map((ingredient, index) => (
                  ingredient
                    ? <BluredLi key={ingredient.name} blurStr={Math.floor(index/2) * 3}>
                        {ingredient.quantity} - {ingredient.name}
                    </BluredLi>
                    : <BluredLi key={index} blurStr={Math.floor(index/2) * 3}>
                      want more ingredients? purchase the recipe with supertab!
                    </BluredLi>
                ))}
              </ul>
            <CenterText>
              You don't have this recipe yet! Please purchase to discover
              a new magical flavor by clicking the button below.
            </CenterText>
            <div id="purchase-button-container"/>
          </NoPermissionContainer>
        }
    </>
  );
};

export default Recipe;
