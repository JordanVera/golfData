import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

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
