import axios from 'axios';
import { MongoClient } from 'mongodb';

export const seedPlayers = async (req, response) => {
  try {
    axios
      .get(
        'https://api.sportsdata.io/golf/v2/json/PlayerSeasonStats/2022?key=94cae4235b24424695ae38e5cd6ec6c5'
      )
      .then(async (players) => {
        const client = new MongoClient(process.env.MONGODB_URI);
        const golfers = client.db('golfers').collection('golfers');

        await client.connect();

        await client.db('golfers').dropDatabase();

        const playersArr = Object.entries(players).map((obj) => {
          return obj;
        });

        const data = playersArr[playersArr.length - 1];
        const answer = data[1].map((object) => {
          const player = {
            playerId: object.PlayerID,
            name: object.Name,
            season: object.Season,
            events: object.Events,
            rank: object.WorldGolfRank,
            lastWeekRank: object.WorldGolfRankLastWeek,
            totalPoints: object.TotalPoints,
            averagePoints: object.AveragePoints,
            pointsLost: object.PointsLost,
            pointsGained: object.PointsGained,
          };

          golfers.insertOne(player);
          return player;
        });
        return response.json({
          message: 'golfers database seeded succesfully',
        });
      });
  } catch (err) {
    return response.json({ err: err.message });
    console.log(err);
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
      return res.json(result);
    });
};
