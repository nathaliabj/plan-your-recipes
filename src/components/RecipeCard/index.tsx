import { Recipe } from "../../types";
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
      </CardOverview>
    </CardContainer>
  );
};

export default RecipeCard;
