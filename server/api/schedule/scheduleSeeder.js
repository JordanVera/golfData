import chalk from 'chalk';
import axios from 'axios';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

export const seedSchedule = async (_) => {
  try {
    const response = await axios.get(
      `https://feeds.datagolf.com/get-schedule?&key=${process.env.DATAGOLF_KEY}`
    );

    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const events = client.db('tournaments').collection('events');

    const schedule = response.data.schedule;

    await client.db('tournaments').dropDatabase();

    schedule.forEach(async (event) => {
      const { course, course_key, event_id, event_name, location, start_date } =
        event;

      await events.insertOne({
        course,
        course_key,
        event_id,
        event_name,
        location,
        start_date,
        formatted_date: new Date(event.start_date),
        lat: event.latitude,
        long: event.longitude,
      });
    });

    console.log(
      'Succesfully retrieved tournament and event data from datagolf API.'
    );
  } catch (error) {
    console.log(chalk.redBright(error.message));
  }
};
