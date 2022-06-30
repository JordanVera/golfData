import axios from 'axios';
import chalk from 'chalk';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import schedule from 'node-schedule';

dotenv.config();

const seedPlayerData = async (_) => {
  const getPlayers = axios.get(
    `https://feeds.datagolf.com/preds/get-dg-rankings?&key=${process.env.DATAGOLF_KEY}`
  );
  const getPlayerStats = axios.get(
    `https://feeds.datagolf.com/preds/skill-ratings?display=value&key=${process.env.DATAGOLF_KEY}`
  );
  const getFantasyData = axios.get(
    `https://api.sportsdata.io/api/golf/json/Players?key=${process.env.FANTASYDATA_KEY}`
  );

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const golfers = client.db('golf').collection('golfers');

  try {
    await axios.all([getPlayers, getPlayerStats, getFantasyData]).then(
      axios.spread(async (res1, res2, res3) => {
        const players = res1.data.rankings;
        const stats = res2.data.players;
        const fantasyData = res3.data;

        await client.db('golf').dropDatabase();

        const answer = players.map((subject) => {
          const strokesGained = stats.find(
            (element) => element.dg_id === subject.dg_id
          );

          const filteredFantasyData = fantasyData.find(
            (element) =>
              `${element.LastName}, ${element.FirstName}` ===
              subject.player_name
          );

          const player = {
            ...subject,
            stats: { ...strokesGained },
            fantasyData: { ...filteredFantasyData },
          };

          golfers.insertOne(player);
          return player;
        });

        return {
          msg: 'Successfully retrieved player data and strokes gained data from DATAGOLF API and Seeded DB',
        };
      })
    );
  } catch (err) {
    console.log(chalk.red(err));
    return { err: err.message };
  }
};

const job = schedule.scheduleJob('* 1 * * * 2', function () {
  seedPlayerData();
});

job()
