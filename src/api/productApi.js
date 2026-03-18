const BASE_URL = 'https://dummyjson.com/products';

export const fetchProductsApi = async (page) => {
  const res = await fetch(
    `${BASE_URL}?limit=10&skip=${(page - 1) * 10}`
  );

  if (!res.ok) throw new Error('API failed');

  return await res.json();
};