import mongoose from 'mongoose';

const ScheduleSchema = new mongoose.Schema(
  {
    course: String,
    course_key: String,
    event_id: Number,
    event_name: String,
    location: String,
    start_date: String,
    formatted_date: Date,
    lat: Number,
    long: Number,
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

ScheduleSchema.pre('save', function () {
  const date = new Date(this.start_date);
  this.start_date = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
});

export default mongoose.model('tournament', ScheduleSchema);
