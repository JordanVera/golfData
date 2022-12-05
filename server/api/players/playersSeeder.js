import axios from 'axios';
import chalk from 'chalk';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

export const seedPlayers = async (_) => {
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
          let strokesGained = stats.find(
            (element) => element.dg_id === subject.dg_id
          );

          if (!strokesGained) {
            strokesGained = {
              driving_acc: 'n/a',
              driving_dist: 'n/a',
              sg_app: 'n/a',
              sg_arg: 'n/a',
              sg_ott: 'n/a',
              sg_putt: 'n/a',
              sg_total: 'n/a',
            };
          }

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

          delete player.stats.player_name;
          delete player.fantasyData.FirstName;
          delete player.fantasyData.LastName;
          delete player.fantasyData.Country;
          delete player.fantasyData.DraftKingsName;
          delete player.fantasyData.DraftKingsPlayerID;

          if (player.stats.sg_app === 'undefined') {
            player.stats.sg_app = 'n/a';
          }

          // player.stats.strokesGained.sg_app.toFixed(1)

          golfers.insertOne(player);
          return player;
        });

        const ret = {
          msg: 'Successfully retrieved player data and strokes gained data from DATAGOLF API and Seeded DB',
        };

        console.log(ret.msg);
      })
    );
  } catch (err) {
    console.log(chalk.red(err));
  }
};
