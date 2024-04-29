import { RecipeCard } from "../components/RecipeCard"
import { useEffect, useState } from "react";
import { api } from "../util/api";
import { Recipe } from "../types";
import { parseTheMealDBToRecipes } from "../util/helpers";
import "https://js.supertab.co/v1/tab.js";

interface Window {
  supertab: {
    createPurchaseButton: (params: {
      containerElement: HTMLElement;
      clientId: string;
      merchantLogoUrl: string;
      merchantName: string,
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

useEffect(()=> {
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
},[])
  // Optional clean-up later:
  // destroy();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const { meals } = await api.theMealDB.getRecipes();
        const parsed = parseTheMealDBToRecipes(meals);
        setRecipes(parsed);
      } catch {
        console.log('Failed to fetch recipes');
      }
    }
    fetchRecipes();
  }, []);

  return(
    <>
      <header className="heading">
        All Recipes
      </header>
       <div id="purchase-button-container"></div>
      <div className="grid-container">
        {recipes?.map(r => <RecipeCard recipe={r} key={`${r.id}-card`}/>)}
      </div>
    </>
  )
}
