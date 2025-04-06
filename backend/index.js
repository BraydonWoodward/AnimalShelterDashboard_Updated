import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import animalRoutes from './routes/animalRoutes.js'; // Import api animal routes
import connectDB from './db.js';


dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Animal routes for all endpoints starting with /api/animals
app.use('/api/animals', animalRoutes);

// Basic route for testing
app.get('/', (req, res) => {
    res.send('API is running...');
  });

// Start the server
const HOST = process.env.HOST;
const PORT = process.env.PORT;
app.listen(PORT, HOST, () => {
  console.log(`Server running at: http://${HOST}:${PORT}`);
});
