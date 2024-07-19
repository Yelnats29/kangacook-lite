import axios from 'axios';

const API_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;

// Fetches a list of recipes from the backend API.
export const getRecipes = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('There was an error fetching the recipes!', error);
        throw error;
    }
};

// Fetches a single recipe from the backend API based on the provided ID.
export const getRecipeById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}${id}/`);
        return response.data;
    } catch (error) {
        console.error(`There was an error fetching the recipe with ID ${id}!`, error);
        throw error;
    }
};

// Creates a new recipe in the backend API.
export const createRecipe = async (recipe) => {
    try {
        const response = await axios.post(API_URL, recipe);
        return response.data;
    } catch (error) {
        console.error('There was an error creating the recipe!', error);
        throw error;
    }
};

// Updates an existing recipe in the backend API.
export const updateRecipe = async (id, recipe) => {
    try {
        const response = await axios.put(`${API_URL}${id}/`, recipe);
        return response.data;
    } catch (error) {
        console.error(`There was an error updating the recipe with ID ${id}!`, error);
        throw error;
    }
};

// Deletes a recipe from the backend API based on the provided ID.
export const deleteRecipe = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}${id}/`);
        return response.data;
    } catch (error) {
        console.error(`There was an error deleting the recipe with ID ${id}!`, error);
        throw error;
    }
};

