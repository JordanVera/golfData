import mongoose from 'mongoose';
import dotenv from 'dotenv';
import chalk from 'chalk';
import { seedSchedule } from './server/api/schedule/scheduleSeeder.js';
import { seedPlayers } from './server/api/players/playersSeeder.js';

dotenv.config();

const db = process.env.MONGODB_URI;

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const importScheduleData = async (_) => {
  try {
    await seedSchedule();

    console.log(
      chalk.green('PGA schedule has been seeded to MONGODB successfully')
    );
  } catch (error) {
    console.error(error);
  }
};

const importPlayerData = async (_) => {
  try {
    await seedPlayers();

    console.log(
      chalk.green(
        'PGA player performance data has been seeded to MONGODB succesfully'
      )
    );
  } catch (error) {
    console.error(error);
  }
};

if (process.argv[2] === '-s') {
  importScheduleData();
} else if (process.argv[2] === '-p') {
  importPlayerData();
}
