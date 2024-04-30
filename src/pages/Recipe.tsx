import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import Label from "../components/Label";
import { Ingredient } from "../types";
import { api } from "../util/api";
import {
  grantPermission,
  isPermissionGranted,
  parseTheMealDBToRecipes,
} from "../util/helpers";
import {
  NavGroup,
  NavUnderline,
  SiteNav,
  SiteNavWrapper,
} from "./AllRecipes.styles";
import {
  BluredLi,
  CenterText,
  NoPermissionContainer,
  RecipeBodyContainer,
  SupertabButton,
  TitleContainer,
  RecipeNavWrapper,
  HeaderTitle,
  RecipeTitleWrapper,
  RecipeTitle,
  TitleUnderline,
  ContentWrapper,
  RecipeImg,
  Content,
  VideoContainer,
} from "./Recipe.styles";

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
          console.log("purhcased canceled");
        },
        onError: () => {
          console.log("error making purchase");
        },
      });
    }
  }, [recipe]);

  if (!recipe) {
    return <NoPermissionContainer>Loading...</NoPermissionContainer>;
  }

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
              <p>{recipe.instructions}</p>
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
          </NoPermissionContainer>
        )}
      </ContentWrapper>
    </>
  );
};

export default Recipe;
