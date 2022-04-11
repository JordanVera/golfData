import express from 'express';
import { seedPlayers, getPlayers } from './api/players/getPlayers.js';
import {
  seedTournaments,
  getTournaments,
} from './api/tournaments/tournamentController.js';

import getScorecard from './api/scorecard/scorecardController.js';
import getPlayerStatisticsBySeason from './api/seasonAverages/seasonAveragesController.js';
const app = express();

app.get('/seedPlayers', seedPlayers);
app.get('/getPlayers', getPlayers);

app.get('/seedTournaments', seedTournaments);
app.get('/tournaments/:isOver', getTournaments);

app.get('/scorecard/:tournamentId/:playerId', getScorecard);

app.get('/seasonAverages/:playerId', getPlayerStatisticsBySeason);

export default app;
