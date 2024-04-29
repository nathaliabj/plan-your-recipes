const getRecipes = async (firstLetter = 's') => {
  // https://www.themealdb.com/api.php
  // using this bc it doesnt require an api key
  // please feel free to use a different api
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?';
  const queryString = `f=${firstLetter}`;

  const url = endpoint + queryString;
  const options = {
    method: 'GET',
  };

  const response = await fetch(url, options);
  return response.json();
}

export const api = {
  theMealDB: {
    getRecipes
  },
};