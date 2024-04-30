import { useState } from "react";
import { Recipe } from "../../types";
import {
  CardContainer,
  CardImg,
  CardOverview,
  CardTitle,
} from "./RecipeCard.style";

export const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const [hasPermission, setHasPermission] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardOnClick = () => {
    if (hasPermission) {
      setIsExpanded(!isExpanded);
    } else {
      // prompt to purchase with supertab
    }
  };

  const ExpandedView = () => (
    <>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li>
            {ingredient.quantity} {ingredient.name}
          </li>
        ))}
      </ul>
      <p>{recipe.instructions}</p>
    </>
  );

  const PurchaseWithSupertab = () => (
    <p>
      Unlock the recipe with Supertab!
      <div id="purchase-button-container"></div>
    </p>
  );

  return (
    <CardContainer onClick={handleCardOnClick}>
      <CardImg src={recipe.image} alt={recipe.name} />
      <CardOverview>
        <CardTitle>{recipe.name}</CardTitle>
        <p>{recipe.description}</p>
      </CardOverview>
    </CardContainer>
  );
};
