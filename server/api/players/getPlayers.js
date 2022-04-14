import axios from 'axios';
import chalk from 'chalk';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

export const seedPlayers = async (req, res) => {
  const axiosrequest1 = axios.get(
    `https://feeds.datagolf.com/preds/get-dg-rankings?&key=${process.env.DATAGOLF_KEY}`
  );
  const axiosrequest2 = axios.get(
    `https://feeds.datagolf.com/preds/skill-ratings?display=value&key=${process.env.DATAGOLF_KEY}`
  );

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const golfers = client.db('golf').collection('golfers');

  try {
    await axios.all([axiosrequest1, axiosrequest2]).then(
      axios.spread(async (res1, res2) => {
        const players = res1.data.rankings;
        const stats = res2.data.players;

        await client.db('golf').dropDatabase();

        const answer = players.map((subject) => {
          const strokesGained = stats.find(
            (element) => element.dg_id === subject.dg_id
          );
          const player = { ...subject, stats: { ...strokesGained } };

          golfers.insertOne(player);
          return player;
        });

        console.log({
          msg: 'Successfully retrieved player data and strokes gained data from DATAGOLF API',
        });
        return res.json(answer);
      })
    );
  } catch (err) {
    console.log(chalk.red(err));
    return res.json({ err: err.message });
  }
};

export const getPlayers = async (req, res) => {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  client
    .db('golfers')
    .collection('golfers')
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      console.log({ msg: 'Successfully retreived all Golfers from MONGODB.' });
      return res.json(result);
    });
};
