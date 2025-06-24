const API_BASE = "http://localhost:8080";

export const getAllCategory = async () =>{
    const response = await fetch (`${API_BASE}/category/list`);
    if(!response.ok)
        throw new Error ('Error to fetch API category');
    return response.json();
}   