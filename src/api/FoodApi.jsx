const API_BASE = "http://localhost:8080";

export const getAllFood = async () => {
    const response = await fetch(`${API_BASE}/food/list-food`);
    if (!response.ok) throw new Error("Error to fetch API Food");
    return response.json();
};

export const getFoodById = async (id) => {
    const response = await fetch(`${API_BASE}/food/${id}`);
    if (!response.ok) throw new Error("Error to fetch API get detail food");
    return response.json();
};
