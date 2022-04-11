import chalk from 'chalk';
import axios from 'axios';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

export const seedTournaments = async (req, res) => {
  try {
    await axios
      .get(
        `https://api.sportsdata.io/golf/v2/json/Tournaments/2022?key=${process.env.GOLF_API_KEY}`
      )
      .then(async (response) => {
        const client = new MongoClient(process.env.MONGODB_URI);
        await client.connect();
        const ended = client.db('tournaments').collection('endedTournaments');
        const pending = client
          .db('tournaments')
          .collection('pendingTournaments');

        try {
          const tournamentsArr = response.data.map((tournament) => tournament);
          const endedTournaments = tournamentsArr.filter((tournament) => {
            if (tournament.IsOver === true) {
              return true;
            } else {
              return false;
            }
          });
          const pendingTournaments = tournamentsArr.filter((tournament) => {
            if (tournament.IsOver === false) {
              return true;
            } else {
              return false;
            }
          });

          await client.db('tournaments').dropDatabase();

          endedTournaments.forEach(async (tourny) => {
            await ended.insertOne({
              id: tourny.TournamentID,
              name: tourny.Name,
              isOver: tourny.IsOver,
            });
          });
          pendingTournaments.forEach(async (tourny) => {
            await pending.insertOne({
              id: tourny.TournamentID,
              name: tourny.Name,
              isOver: tourny.IsOver,
            });
          });
        } catch (error) {
          console.log(chalk.redBright(error.message));
        }
      });
  } catch (error) {
    console.log(error.message);
  }

  return res.json('');
};

export const getTournaments = async (req, res) => {
  try {
    if (req.params.isOver === 'true') {
      const client = new MongoClient(process.env.MONGODB_URI);
      await client.connect();
      client
        .db('tournaments')
        .collection('endedTournaments')
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          return res.json(result);
        });
    } else if (req.params.isOver === 'false') {
      const client = new MongoClient(process.env.MONGODB_URI);
      await client.connect();
      client
        .db('tournaments')
        .collection('pendingTournaments')
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          return res.json(result);
        });
    } else {
      return res.json({ err: 'Stop Snooping' });
    }
  } catch (error) {
    console.log(error.message);
  }
};
