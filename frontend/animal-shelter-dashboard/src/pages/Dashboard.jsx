import React, { useContext, useState } from 'react';
import { AnimalContext } from '../context/AnimalContext';
import AnimalTable from '../components/AnimalTable';
import SearchBox from '../components/SearchBox';
import MapComponent from '../components/MapComponent';
import { createAnimal } from '../api/animalApi';

/**
 * Dashboard - Main view displaying animal records and search functionality.
 */
const Dashboard = () => {
  const { animals, loading, error, loadAnimals } = useContext(AnimalContext);

  // Detail modal
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  // Create modal
  const [showCreate, setShowCreate] = useState(false);

  // Form state for new animal
  const [newAnimal, setNewAnimal] = useState({
    name: '',
    breed: '',
    animal_type: '',
    color: '',
    location: '',
    location_lat: '',
    location_long: '',
    age_upon_outcome: '',
    age_upon_outcome_in_weeks: ''
  });

  // console.log('Dashboard animals:', animals); // Debug logging

  // Handle search to filter animals by name, breed, etc.
  const handleSearch = (query) => {
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

  // Handle create animal
  const openCreate = () => setShowCreate(true);
  const closeCreate = () => {
    setShowCreate(false);
    setNewAnimal({
      name: '',
      breed: '',
      animal_type: '',
      color: '',
      location: '',
      location_lat: '',
      location_long: '',
      age_upon_outcome: '',
      age_upon_outcome_in_weeks: ''
    });
  };

  const handleCreateSubmit = async (e) => {
    e.preventDefault();           // prevent full‑page reload
    console.log('submitting…');   // check this appears
    try {
      await createAnimal(newAnimal);
      await loadAnimals();
      closeCreate();
    } catch (err) {
      console.error(err);
    }
  };


  if (loading) return <p>Loading animals...</p>;
  if (error) return <p>Error loading animals: {error.message}</p>;

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      {/* Header with Create button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Animal Shelter Dashboard</h1>
        <button onClick={openCreate}>+ Create Animal</button>
      </div>

      {/* Search and Table */}
      <SearchBox onSearch={handleSearch} />
      <AnimalTable animals={animals} onRowClick={handleRowClick} />

      {/* DETAILS MODAL */}
      {selectedAnimal && (
        <div className="modal-overlay" onClick={handleCloseDetails}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseDetails} aria-label="Close details">&times;</button>
            <div className="modal-body">
              <div className="animal-info">
                <h2>{selectedAnimal.name}</h2>
                <p><strong>Breed:</strong> {selectedAnimal.breed}</p>
                <p><strong>Type:</strong> {selectedAnimal.animal_type}</p>
                <p><strong>Outcome:</strong> {selectedAnimal.outcome_type}</p>
                {/* …any other details */}
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
        </div>
      )}

      {/* CREATE MODAL */}
      {showCreate && (
        <div className="modal-overlay" onClick={closeCreate}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeCreate} aria-label="Close create">&times;</button>
            <h2>Create New Animal</h2>
            <form onSubmit={handleCreateSubmit}>
              {[
                { key: 'rec_num', type: 'number' },
                { key: 'animal_id', type: 'text' },
                { key: 'name', type: 'text' },
                { key: 'breed', type: 'text' },
                { key: 'animal_type', type: 'text' },
                { key: 'color', type: 'text' },
                { key: 'location', type: 'text' },
                { key: 'location_lat', type: 'number' },
                { key: 'location_long', type: 'number' },
                { key: 'age_upon_outcome', type: 'text' },
                { key: 'age_upon_outcome_in_weeks', type: 'number' }
              ].map(({ key, type }) => (
                <div key={key} style={{ marginBottom: '0.5rem' }}>
                  <input
                    type={type}
                    placeholder={key.replace(/_/g, ' ')}
                    value={newAnimal[key]}
                    required
                    style={{ width: '100%', padding: '0.5rem' }}
                    onChange={e => {
                      const raw = e.target.value;
                      const val = type === 'number'
                        ? raw === ''
                          ? ''
                          : Number(raw)      // coerce to Number
                        : raw;               // leave text as-is
                      setNewAnimal({ ...newAnimal, [key]: val });
                    }}
                  />
                </div>
              ))}
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;