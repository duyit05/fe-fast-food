const API_BASE = "http://localhost:8080";

export const getAllFood = async (pageNo = 0, pageSize = 6, keyword = '') => {
  const url = new URL(`${API_BASE}/food/list-food`);
  url.searchParams.append("pageNo", pageNo);
  url.searchParams.append("pageSize", pageSize);
  if (keyword) url.searchParams.append("keyword", keyword);
  const response = await fetch(url);
  if (!response.ok) throw new Error("Error to fetch API Food");
  return response.json();
};

export const getFoodById = async (id) => {
  const response = await fetch(`${API_BASE}/food/${id}`);
  if (!response.ok) throw new Error("Error to fetch API get detail food");
  return response.json();
};
