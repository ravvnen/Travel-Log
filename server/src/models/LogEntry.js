import mongoose from 'mongoose';
const { Schema } = mongoose;


const requiredNumber = {
    type: Number,
    required: true,
};

const logEntrySchema = new Schema({
  title: {
    type: String,
    required: true
},
  description: String,
  comment: String,
  image: String,
  rating: {
    type: Number,
    min: [0, 'Rating must be above 0'],
    max: [10, 'Rating must be below 10'],
    default: 0
  },
  latitude: requiredNumber,
  longitude: requiredNumber,
  visitDate: {
    required: true,
    type: Date,
  },
},

{
  timestamps: true,
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);
module.exports = LogEntry;