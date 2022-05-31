import chalk from 'chalk';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './server/index.js';
import express from 'express';
import bodyparser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

dotenv.config();

const db = process.env.MONGODB_URI;
const port = process.env.PORT || 5555;

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use(morgan('tiny'));

app.use(bodyparser.json());

app.use(cors());

app.use('/', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./build'));
}

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
