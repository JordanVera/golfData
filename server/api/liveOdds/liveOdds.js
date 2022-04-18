import axios from 'axios';
// import chalk from 'chalk';
import dotenv from 'dotenv';

dotenv.config();

const getLiveOdds = async (req, res) => {
  axios
    .get(
      `https://feeds.datagolf.com/betting-tools/outrights?market=win&odds_format=american&key=${process.env.DATAGOLF_KEY}`
    )
    .then(async (oddsData) => {
      try {
        console.log({ msg: 'live odds data retrieved from datagolf API' });
        const d = oddsData.data;
        return res.json(d);
      } catch (err) {
        console.log({ err: err.message });
      }
    });
};

export default getLiveOdds;