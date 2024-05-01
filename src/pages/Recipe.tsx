import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import Label from "../components/Label";
import { SecondaryNavBar } from "../components/NavBar";
import { Recipe } from "../types";
import { api } from "../util/api";
import {
  grantPermission,
  isPermissionGranted,
  parseTheMealDBToRecipes,
} from "../util/helpers";
import {
  BluredLi,
  CenterText,
  NoPermissionContainer,
  RecipeBodyContainer,
  SupertabButton,
  RecipeTitleWrapper,
  RecipeTitle,
  TitleUnderline,
  ContentWrapper,
  RecipeImg,
  Content,
  VideoContainer,
  InstructionsText,
} from "./Pages.styles";

const RecipePage: FC = () => {
  const [recipe, setRecipe] = useState<Recipe>();
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

  const giveFakePermission = () => {
    grantPermission(id);
    setHasPermission(true);
  };

  useEffect(() => {
    const cow = document.getElementById("purchase-button-container");
    if (cow && cow.childElementCount === 0 && recipe) {
      (window as any).supertab?.createPurchaseButton({
        containerElement: document.getElementById("purchase-button-container")!,
        clientId: "client.ea57cc9a-fa24-46ab-a0cc-4b93e7ffc2ac",
        merchantLogoUrl: "https://www.resumegpt.ai/logo.svg",
        merchantName: "Yummy recipes",
        offeringId: "offering.a1c40152-191d-4e61-8b98-33c53b200d2d",
        onPurchaseCompleted: () => {
          grantPermission(id);
          setHasPermission(true);
          // localStorage.setItem("recipes", JSON.stringify(recipe));
        },
        onPurchaseCanceled: () => {
          console.log("purhcased canceled");
        },
        onError: () => {
          console.log("error making purchase");
        },
      });
    }
  }, [recipe]);
  console.log("🎀🎀🎀🎀🎀🎀")
  if (!recipe) {
    return <NoPermissionContainer>Loading...</NoPermissionContainer>;
  }

  return (
    <>
      <header>
        <SecondaryNavBar />
      </header>

      <ContentWrapper>
        <RecipeTitleWrapper>
          <RecipeTitle>{recipe.name}</RecipeTitle>
          <TitleUnderline />
        </RecipeTitleWrapper>
        {hasPermission ? (
          <RecipeBodyContainer>
            <RecipeImg src={recipe?.image} alt={recipe?.name} />
            <div>
              {recipe.category && <Label>{recipe.category}</Label>}
              <h2>Ingredients</h2>
              <ul>
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient.name}>
                    {ingredient.quantity} - {ingredient.name}
                  </li>
                ))}
              </ul>
              <h2>Instructions</h2>
              <InstructionsText>{recipe.instructions}</InstructionsText>
              {recipe.video && (
                <VideoContainer>
                  <h2>Step by step</h2>
                  <YouTube videoId={recipe.video.split("?v=").pop()} />
                </VideoContainer>
              )}
            </div>
          </RecipeBodyContainer>
        ) : (
          <NoPermissionContainer>
            <Content>
              <RecipeImg src={recipe?.image} alt={recipe?.name} />
              <div>
                {recipe.category && <Label>{recipe.category}</Label>}
                <h2>Ingredients</h2>

                <ul>
                  {recipe.ingredients.slice(0, 6).map((ingredient, index) =>
                    ingredient ? (
                      <BluredLi
                        key={ingredient.name}
                        blurStr={Math.floor(index / 4) * 3}
                      >
                        {ingredient.quantity} - {ingredient.name}
                      </BluredLi>
                    ) : (
                      <BluredLi key={index} blurStr={Math.floor(index / 2) * 3}>
                        want more ingredients? purchase the recipe with
                        supertab!
                      </BluredLi>
                    )
                  )}
                </ul>
              </div>
            </Content>
            <CenterText>
              You don't have this recipe yet! Please purchase to discover a new
              magical flavor by clicking the button below.
            </CenterText>
            <SupertabButton id="purchase-button-container" />
            <button onClick={giveFakePermission}>Give me permission</button>
          </NoPermissionContainer>
        )}
      </ContentWrapper>
    </>
  );
};

export default RecipePage;
