import { useState } from "react";
import { Recipe } from "../types";

export const RecipeCard = ({ recipe }:{ recipe: Recipe }) => {
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
        {recipe.ingredients.map(ingredient => (
          <li>{ingredient.quantity} {ingredient.name}</li>
        ))}
      </ul>
      <p>{recipe.instructions}</p>
    </>
  );

  const PurchaseWithSupertab = () => (
    <p>Unlock the recipe with Supertab!</p>
  );

  return (
    <div className="recipe-card" onClick={handleCardOnClick}>
      <h3>{recipe.name}</h3>
      <img src={recipe.image} alt={recipe.name} />
      <p>{recipe.description}</p>
      {
        isExpanded
        ? hasPermission
          ? <ExpandedView />
          : <PurchaseWithSupertab />
        : null
      }
      
    </div>
  );
}