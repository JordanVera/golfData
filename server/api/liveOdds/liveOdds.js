import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const getLiveOdds = async (req, res) => {
  axios
    .get(
      `https://feeds.datagolf.com/betting-tools/outrights?market=win&odds_format=american&key=${process.env.DATAGOLF_KEY}`
    )
    .then(async (oddsData) => {
      try {
        const d = oddsData.data;
        console.log({ msg: 'live odds data retrieved from datagolf API' });
        return res.json(d);
      } catch (err) {
        console.log({ err: err.message });
      }
    });
};

export const getTopFive = async (req, res) => {
  axios
    .get(
      `https://feeds.datagolf.com/betting-tools/outrights?market=top_5&odds_format=american&key=${process.env.DATAGOLF_KEY}`
    )
    .then(async (oddsData) => {
      try {
        const d = oddsData.data;
        console.log({ msg: 'Top 5 odds data retrieved from datagolf API' });
        return res.json(d);
      } catch (err) {
        console.log({ err: err.message });
      }
    });
};

export const getTopTen = async (req, res) => {
  axios
    .get(
      `https://feeds.datagolf.com/betting-tools/outrights?market=top_10&odds_format=american&key=${process.env.DATAGOLF_KEY}`
    )
    .then(async (oddsData) => {
      try {
        const d = oddsData.data;
        console.log({ msg: 'Top 10 odds data retrieved from datagolf API' });
        return res.json(d);
      } catch (err) {
        console.log({ err: err.message });
      }
    });
};
