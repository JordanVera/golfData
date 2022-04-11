import mongoose from 'mongoose';

const tournamentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  isOver: {
    type: Boolean,
    required: true,
  },
});

const Tournament = mongoose.model('Tournament', tournamentSchema);

export default Tournament;
