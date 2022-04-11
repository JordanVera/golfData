import axios from 'axios';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

const getScorecard = async (req, res) => {
  try {
    await axios
      .get(
        `https://api.sportsdata.io/golf/v2/json/PlayerTournamentStatsByPlayer/${req.params.tournamentId}/${req.params.playerId}?key=${process.env.GOLF_API_KEY}`
      )
      .then((scorecard) => {
        const response = scorecard.data;

        if (scorecard.data === '') {
          return res.json({
            message: `Golfer with id of ${req.params.playerId} did not play in tournament ID ${req.params.tournamentId}`,
          });
        }
        const answer = {
          playerId: response.PlayerID,
          tournamentId: response.TournamentID,
          playerId: response.PlayerID,
          totalScore: response.TotalScore,
          totalStrokes: response.TotalStrokes,
          country: response.Country,
          earnings: response.Earnings,
          doubleEagles: response.DoubleEagles,
          eagles: response.Eagles,
          birdies: response.Birdies,
          pars: response.Pars,
          bogeys: response.Bogeys,
          doubleBogeys: response.DoubleBogeys,
          worseThanDoubleBogeys: response.WorseThanDoubleBogey,
          holeInOnes: response.HoleInOnes,
          rounds: response.Rounds,
        };
        return res.json(answer);
      });
  } catch (err) {
    console.log(chalk.redBright(err.message));
    return res.json({ err: err.message });
  }
};

export default getScorecard;
