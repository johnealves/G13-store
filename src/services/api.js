export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // const response = await fetch(
  //   `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  // );
  // const result = await response.json();
  const result = fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((resp) => resp.json())
    .catch((error) => console.log(error));
  return result;
}
