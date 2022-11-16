import mongoose from 'mongoose';

const PredictionSchema = new mongoose.Schema(
  {
    event_name: String,
    last_updated: String,
    baseline: [Object],
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

export default mongoose.model('prediction', PredictionSchema);
