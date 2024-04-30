import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Ingredient } from "../types";
import { api } from "../util/api";
import { parseTheMealDBToRecipes } from "../util/helpers";

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
    (window as any).supertab?.createPurchaseButton({
      containerElement: document.getElementById("purchase-button-container")!,
      clientId: "client.cbe31267-317e-4ca5-bc66-aca83ce27d1d",
      merchantLogoUrl: "https://www.resumegpt.ai/logo.svg",
      merchantName: "Yummy recipes",
      offeringId: "offering.a05c3fad-b9d0-440a-9331-25e3f1b3be9c",
      onPurchaseCompleted: () => {
        alert("Purchase completed!");
      },
      onPurchaseCanceled: () => {
        alert("Purchase canceled!");
      },
      onError: () => {
        alert("Purchase error!");
      },
    });
  }, []);

  return (
    <>
      {!recipe ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{recipe.name}</h1>
          <p>{recipe.instructions}</p>
          <div id="purchase-button-container"></div>
        </>
      )}
    </>
  );
};

export default Recipe;
