// routes/animalRoutes.js
import express from 'express';
const router = express.Router();
import mockAnimals from '../mockAnimals.js'; // Mock data file

// In-memory data store of mock animals
let animals = [...mockAnimals];

/** 
 * GET /api/animals 
 * Retrieve all animals (or filter them)
 * **Will need to be updated when connected to MongoDB
 */
router.get('/', (req, res) => {
  // Extract query parameters
  const { animal_type, breed, name } = req.query;

  // Start with all animals
  let filteredAnimals = animals;

 // If any of these filters are provided, use an OR condition
 if (name || breed || animal_type) {
  filteredAnimals = animals.filter(animal => {
    return (
      (name && animal.name.toLowerCase().includes(name.toLowerCase())) ||
      (breed && animal.breed.toLowerCase().includes(breed.toLowerCase())) ||
      (animal_type && animal.animal_type.toLowerCase().includes(animal_type.toLowerCase()))
    );
  });
}
  res.json(filteredAnimals);
});

/**
 * POST /api/animals
 * Create a new animal record 
 */
router.post('/', (req, res) => {
  const newAnimal = req.body;
  // Assign a simple ID if one isn't provided
  if (!newAnimal._id) {
    newAnimal._id = Date.now().toString();
  }
  animals.push(newAnimal);
  res.status(201).json(newAnimal);
});

/**
 * PUT /api/animals/:id
 * Update an existing animal record
 */
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const index = animals.findIndex((a) => a._id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Animal not found' });
  }
  // Merge the new data with the existing record
  animals[index] = { ...animals[index], ...req.body };
  res.json(animals[index]);
});

/**
 * DELETE /api/animals/:id
 * Delete an animal record
 */
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = animals.findIndex((a) => a._id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Animal not found' });
  }
  animals.splice(index, 1);
  res.status(204).end();
});

export default router;