import express from 'express';
import { getPlayers, getPlayer } from './api/players/players.js';
import { getSchedule, getRemainingSchedule } from './api/schedule/schedule.js';
import { seedPlayers } from './api/players/playersSeeder.js';
import liveStrokesGainedData from './api/liveStrokesGained/liveStrokesGained.js';
import getRecentNews from './api/news/news.js';
import { getLiveOdds, getTopFive, getTopTen } from './api/liveOdds/liveOdds.js';
import { getLatestPerformanceData } from './api/players/getLatestPerformanceData.js';
import postSubmitForm from './api/submitForm/submitFormController.js';
import { getPlayerSkillDecompositions } from './api/players/playerSkillDecompositions.js';
import getPredictions from './api/predictions/predictionsController.js';
const app = express();

app.get('/getPlayers', getPlayers);
app.get('/getPlayer/:playerId', getPlayer);
app.get('/tournamentData', getLatestPerformanceData);
app.get('/skillDecomposition', getPlayerSkillDecompositions);

app.get('/getSchedule', getSchedule);
app.get('/getRemainingSchedule', getRemainingSchedule);

app.get('/scoringDistribution', liveStrokesGainedData);
app.get('/predictions', getPredictions);

app.get('/liveOdds', getLiveOdds);
app.get('/top_5', getTopFive);
app.get('/top_10', getTopTen);

app.get('/recentNews', getRecentNews);

app.post('/submitForm', postSubmitForm);

export default app;
