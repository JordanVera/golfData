import express from 'express';
import {
  seedPlayers,
  getPlayers,
  getPlayer,
} from './api/players/getPlayers.js';
import { seedSchedule, getSchedule } from './api/schedule/schedule.js';
import liveStrokesGainedData from './api/liveStrokesGained/liveStrokesGained.js';
import getScorecard from './api/scorecard/scorecardController.js';
import getPlayerStatisticsBySeason from './api/seasonAverages/seasonAveragesController.js';
import getRecentNews from './api/news/news.js';
import { getLiveOdds, getTopFive, getTopTen } from './api/liveOdds/liveOdds.js';
import postSubmitForm from './api/submitForm/submitFormController.js';
const app = express();

app.get('/seedPlayers', seedPlayers);
app.get('/getPlayers', getPlayers);
app.get('/getPlayer/:playerId', getPlayer);

app.get('/seedSchedule', seedSchedule);
app.get('/getSchedule', getSchedule);

app.get('/scoringDistribution', liveStrokesGainedData);

app.get('/scorecard/:tournamentId/:playerId', getScorecard);

app.get('/seasonAverages/:playerId', getPlayerStatisticsBySeason);

app.get('/liveOdds', getLiveOdds);
app.get('/top_5', getTopFive);
app.get('/top_10', getTopTen);

app.get('/recentNews', getRecentNews);

app.post('/submitForm', postSubmitForm);

export default app;
