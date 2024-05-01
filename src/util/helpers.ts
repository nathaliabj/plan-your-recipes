import { Ingredient, Recipe } from "../types";

const parseTheMealDBToRecipe = (meal: any): Recipe => {
  const parseIngredients = (meal: any) => {
    const ingredients: Ingredient[] = [];
    let isComplete = false;
    while (!isComplete) {
      const ingredient = meal[`strIngredient${ingredients.length + 1}`];
      const measure = meal[`strMeasure${ingredients.length + 1}`];
      if (ingredient && measure) {
        ingredients.push({
          name: ingredient,
          quantity: measure,
        });
      } else {
        isComplete = true;
      }
    }
    return ingredients;
  };

  return {
    id: meal.idMeal,
    name: meal.strMeal,
    description: meal.strInstructions.substring(0, 50) + "...",
    category: meal.strCategory,
    ingredients: parseIngredients(meal),
    instructions: meal.strInstructions,
    image: meal.strMealThumb,
    video: meal.strYoutube,
  };
};

export const parseTheMealDBToRecipes = (meals: any[]): Recipe[] => {
  return meals.map(parseTheMealDBToRecipe).sort(() => Math.random() - 0.5);
};

export const isPermissionGranted = (recipeId?: string): boolean => {
  return recipeId ? localStorage.getItem("recipe-" + recipeId) === "granted" : false;
};

export const grantPermission = (recipeId?: string): void => {
  if (!recipeId) return;
  localStorage.setItem("recipe-" + recipeId, "granted");
};