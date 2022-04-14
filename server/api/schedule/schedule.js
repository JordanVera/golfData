import chalk from 'chalk';
import axios from 'axios';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

export const seedSchedule = async (req, res) => {
  try {
    await axios
      .get(
        `https://feeds.datagolf.com/get-schedule?&key=${process.env.DATAGOLF_KEY}`
      )
      .then(async (response) => {
        const client = new MongoClient(process.env.MONGODB_URI);
        await client.connect();
        const events = client.db('golf').collection('tournaments');

        try {
          const schedule = response.data.schedule;

          await client.db('golf').dropDatabase();

          schedule.forEach(async (event) => {
            await events.insertOne({
              course: event.course,
              course_key: event.course_key,
              event_id: event.event_id,
              event_name: event.event_name,
              location: event.location,
              start_date: event.start_date,
              lat: event.latitude,
              long: event.longitude,
            });
          });

          console.log(
            chalk.green({
              msg: 'Succesfully retrieved tournament and event data from datagolf API.',
            })
          );
        } catch (error) {
          console.log(chalk.redBright(error.message));
        }
      });
  } catch (error) {
    console.log(error.message);
  }

  return res.json({
    msg: 'Database seeded succuessfully with tournament event schedule.',
  });
};

export const getSchedule = async (req, res) => {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    client
      .db('tournaments')
      .collection('events')
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        return res.json(result);
      });

    console.log({
      msg: 'Successfully retreived all Tournaments and Events from MONGODB.',
    });
  } catch (error) {
    console.log({ msg: error.message });
  }
};
