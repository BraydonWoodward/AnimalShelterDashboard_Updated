import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Animal from './models/Animal.js';
import mockAnimals from './mockAnimals.js'; // Your mock data array

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

const seedDatabase = async () => {
  try {
    // Connect to the database
    await connectDB();

    // Optionally clear existing data
    await Animal.deleteMany({});
    console.log('Existing data cleared.');

    // Insert seed data
    await Animal.insertMany(mockAnimals);
    console.log('Database seeded successfully!');
    
    // Close the connection when done
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();