import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
  rec_num: Number,
  age_upon_outcome: String,
  animal_id: String,
  animal_type: String,
  breed: String,
  color: String,
  name: String,
  outcome_subtype: String,
  outcome_type: String,
  sex_upon_outcome: String,
  location_lat: Number,
  location_long: Number,
  age_upon_outcome_in_weeks: Number,
}, { timestamps: true });

export default mongoose.model('Animal', animalSchema);