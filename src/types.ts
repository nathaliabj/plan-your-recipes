export type Ingredient = {
  name: string;
  quantity: string;
};

export type Recipe = {
  id?: string;
  name: string;
  description?: string;
  category?: string;
  ingredients: Ingredient[];
  instructions: string;
  image?: string;
  video?: string;
};
