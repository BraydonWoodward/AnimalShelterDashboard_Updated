import React, { useContext, useState } from 'react';
import { AnimalContext } from '../context/AnimalContext';
import AnimalTable from '../components/AnimalTable';
import SearchBox from '../components/SearchBox';
import MapComponent from '../components/MapComponent';

/**
 * Dashboard - Main view displaying animal records and search functionality.
 */
const Dashboard = () => {
  const { animals, loading, error, loadAnimals } = useContext(AnimalContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  console.log('Dashboard animals:', animals); // Debug logging

  // Handle search to filter animals by name, breed, etc.
  const handleSearch = (query) => {
    setSearchQuery(query);
    
     // Clear any previously selected animal details
    setSelectedAnimal(null);
    
    // Call loadAnimals with search query as a filter parameter.
    loadAnimals({
      name: query,
      breed: query,
      animal_type: query
    });
  };

  // Handle row click event
  const handleRowClick = (animal) => {
    setSelectedAnimal(animal);
  };

  // Handle closing the animal details view
  const handleCloseDetails = () => {
    setSelectedAnimal(null);
  };

  if (loading) return <p>Loading animals...</p>;
  if (error) return <p>Error loading animals: {error.message}</p>;

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1200px', // Adjust to desired width
        margin: '0 auto',  // Center horizontally
        padding: '1rem',   // Some breathing room
      }}
    >
      <h1>Animal Shelter Dashboard</h1>
      {/* Search input */}
      <SearchBox onSearch={handleSearch} />
      {/* Table displaying animal records */}
      <AnimalTable animals={animals} onRowClick={handleRowClick} />
      {/* Display animal details when a row is clicked */}
      {selectedAnimal && (
  <div className="animal-details">
    <button onClick={handleCloseDetails} className="close-button" aria-label="Close details">
      &times;
    </button>
    <div className="details-content">
      <div className="animal-info">
        <h2>{selectedAnimal.name}</h2>
        <p><strong>Breed:</strong> {selectedAnimal.breed}</p>
        <p><strong>Type:</strong> {selectedAnimal.animal_type}</p>
        <p><strong>Additional Details:</strong> {/* add more details as needed */}</p>
      </div>
      <div className="map-container">
        <MapComponent 
          latitude={selectedAnimal.location_lat} 
          longitude={selectedAnimal.location_long} 
          name={selectedAnimal.name} 
        />
      </div>
    </div>
  </div>
      )}
    </div>
  );
};

export default Dashboard;