import axios from 'axios';

// Use Vite's environment variable for the API base URL.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/animals';

/**
 * fetchAnimals - Retrieves animal records from the backend API.
 * @param {Object} filters - Optional query parameters for filtering animals.
 * @returns {Promise} - Promise resolving to the list of animals.
 */
export const fetchAnimals = async (filters = {}) => {
  try {
    const response = await axios.get(API_URL, { params: filters });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * fetchAnimalById - Retrieves a single animal record by its ID.
 * @param {string} id - The unique identifier of the animal.
 * @returns {Promise} - Promise resolving to the animal details.
 */
export const fetchAnimalById = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

/**
 * createAnimal - Creates a new animal record.
 * @param {Object} animalData - Data for the new animal.
 * @returns {Promise} - Promise resolving to the created animal.
 */
export const createAnimal = async (animalData) => {
  try {
    const response = await axios.post(API_URL, animalData);
    return response.data;
  } catch (error) {
    throw error;
  }
};