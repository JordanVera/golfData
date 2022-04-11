import axios from 'axios';
import dotenv from 'dotenv';
import chalk from 'chalk';
import { MongoClient } from 'mongodb';

dotenv.config();

const getPlayerStatisticsForSeason = async (req, res) => {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();

    const tournaments = await client
      .db('tournaments')
      .collection('endedTournaments')
      .find({})
      .toArray();

    const answer = tournaments.map((tournament) => {
      return axios
        .get(
          `http://localhost:5555/scorecard/${tournament.id}/${req.params.playerId}`
        )
        .then((scorecard) => {
          return scorecard.data;
        })
        .catch((err) => {
          console.log(chalk.red('error', err.message));
          return res.json({ err: err.message });
        });
    });
    Promise.all(answer).then((scorecard) => {
      const statsForPlayedTournaments = scorecard.filter(
        (card) => !card.message
      );
      res.json(statsForPlayedTournaments);
    });

    console.log(
      chalk.greenBright(
        `retreived player stats for player ${req.params.playerId} for season sportsdata.io`
      )
    );
  } catch (err) {
    console.log(chalk.red(err.message));
    return res.json({ err: err.message });
  }
};

export default getPlayerStatisticsForSeason;
