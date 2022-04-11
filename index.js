import chalk from 'chalk';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './server/index.js';
import express from 'express';
import bodyparser from 'body-parser';

const app = express();

dotenv.config();

const db = process.env.MONGODB_URI;
const port = 5555;

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use(bodyparser.json());

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(chalk.yellowBright('MONGODB Connected'));
    app.listen(port, () => {
      console.log(chalk.bgBlueBright.black(`App listening on port ${port}`));
    });
  })
  .catch((err) => console.log(err.message));

app.use('/', router);
