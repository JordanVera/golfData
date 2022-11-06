
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();



export const getSchedule = async (req, res) => {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    client
      .db('tournaments')
      .collection('events')
      .find()
      .sort({ formatted_date: 1 })
      .toArray(function (err, result) {
        if (err) throw err;
        return res.json(result);
      });
  } catch (error) {
    console.log({ msg: error.message });
  }
};

export const getRemainingSchedule = async (req, res) => {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    client
      .db('tournaments')
      .collection('events')
      .find({ formatted_date: { $gte: new Date() } })
      .sort({ formatted_date: 1 })
      .toArray(function (err, result) {
        if (err) throw err;
        return res.json(result);
      });
  } catch (error) {
    console.log({ msg: error.message });
  }
};
