import express from 'express';
import Animal from '../models/Animal.js';

const router = express.Router();

/** 
 * GET /api/animals 
 * Retrieve all animals (or filter them)
 * **Will need to be updated when connected to MongoDB
 */
router.get('/', async (req, res) => {
  try {
    // Extract query parameters
    const { animal_type, breed, name } = req.query;

    // Build a filter object for an OR search
    let filter = {};
    if (name || breed || animal_type) {
      filter = {
        $or: [
          name ? { name: { $regex: name, $options: 'i' } } : {},
          breed ? { breed: { $regex: breed, $options: 'i' } } : {},
          animal_type ? { animal_type: { $regex: animal_type, $options: 'i' } } : {},
        ],
      };
    }

    const animals = await Animal.find(filter);
    res.json(animals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/animals
 * Create a new animal record 
 */
router.post('/', async (req, res) => {
  console.log('Received POST /api/animals:', req.body);
  try {
    const newAnimal = new Animal(req.body);
    const saved = await newAnimal.save();
    console.log('Saved document:', saved);
    return res.status(201).json(saved);
  } catch (e) {
    console.error('Error saving animal:', e);
    return res.status(500).json({ error: e.message });
  }
});

/**
 * PUT /api/animals/:id
 * Update an existing animal record
 */
router.put('/:id', async (req, res) => {
  try {
    const updatedAnimal = await Animal.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedAnimal) {
      return res.status(404).json({ error: 'Animal not found' });
    }
    res.json(updatedAnimal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

/**
 * DELETE /api/animals/:id
 * Delete an animal record
 */
router.delete('/:id', async (req, res) => {
  try {
    const deletedAnimal = await Animal.findByIdAndDelete(req.params.id);
    if (!deletedAnimal) {
      return res.status(404).json({ error: 'Animal not found' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;