import { Recipe } from "../../types";
import Label from "../Label";
import {
  CardContainer,
  CardImg,
  CardOverview,
  CardTitle,
  CardDescription,
  TitleWrapper,
  Underline,
} from "./RecipeCard.style";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <CardContainer>
      <CardImg src={recipe.image} alt={recipe.name} />
      <CardOverview>
        <TitleWrapper>
          <CardTitle>{recipe.name}</CardTitle>
          <Underline />
        </TitleWrapper>
        <CardDescription>{recipe.description}</CardDescription>
        {recipe.category && <Label>{recipe.category}</Label>}
      </CardOverview>
    </CardContainer>
  );
};

export default RecipeCard;
