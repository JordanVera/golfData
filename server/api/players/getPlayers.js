import axios from 'axios';
import chalk from 'chalk';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

export const seedPlayers = async (req, res) => {
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

        console.log('fantasyData', fantasyData);

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

        const ret = {
          msg: 'Successfully retrieved player data and strokes gained data from DATAGOLF API and Seeded DB',
        };
        console.log(ret);
        return res.json(ret);
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
    .db('golf')
    .collection('golfers')
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      const sortedByRanking = result
        .filter((player) => {
          if (player.owgr_rank <= 500) return player;
        })
        .sort((x, y) => {
          return x.owgr_rank > y.owgr_rank ? 1 : -1;
        });
      console.log({
        msg: `Succesfully retreived players from MONGODB`,
      });
      return res.json(sortedByRanking);
    });
};

export const getPlayer = async (req, res) => {
  const playerId = req.params.playerId;
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  client
    .db('golf')
    .collection('golfers')
    .findOne({ dg_id: parseFloat(playerId) }, (err, player) => {
      if (err) throw err;

      console.log({
        msg: `Succesfully retreived playerdata with ID of ${playerId} from MONGODB`,
      });
      return res.json(player);
    });
};
