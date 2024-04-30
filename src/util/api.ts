const getRecipes = async (firstLetter = "s") => {
  // https://www.themealdb.com/api.php
  // using this bc it doesnt require an api key
  // please feel free to use a different api
  const endpoint = "https://www.themealdb.com/api/json/v1/1/search.php?";
  const queryString = `f=${firstLetter}`;

  const url = endpoint + queryString;
  const options = {
    method: "GET",
  };

  const response = await fetch(url, options);
  return response.json();
};

const getRecipe = async (id: string | undefined) => {
  // https://www.themealdb.com/api.php
  // using this bc it doesnt require an api key
  // please feel free to use a different api
  if (id === undefined) throw new Error("id is undefined");
  const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  // const queryString = `i=${id}`;

  // const url = endpoint + queryString;
  const options = {
    method: "GET",
  };

  const response = await fetch(endpoint, options);
  return response.json();
};

export const api = {
  theMealDB: {
    getRecipes,
    getRecipe,
  },
};
