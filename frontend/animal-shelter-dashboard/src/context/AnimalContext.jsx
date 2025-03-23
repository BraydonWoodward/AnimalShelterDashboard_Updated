import React, { createContext, useState, useEffect } from 'react';
import { fetchAnimals } from '../api/animalApi';

// Create a context to hold animal data and related functions.
export const AnimalContext = createContext();

/**
 * AnimalProvider - Provides animal data and functions to the application.
 * @param {Object} props - React children components.
 */
export const AnimalProvider = ({ children }) => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to load animals, optionally with filters.
  const loadAnimals = async (filters = {}) => {
    setLoading(true);
    try {
      const data = await fetchAnimals(filters);
      setAnimals(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Load animals on component mount.
  useEffect(() => {
    loadAnimals();
  }, []);

  return (
    <AnimalContext.Provider value={{ animals, loading, error, loadAnimals }}>
      {children}
    </AnimalContext.Provider>
  );
};
