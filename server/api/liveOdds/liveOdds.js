import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const getLiveOdds = async (req, res) => {
  try {
    const response = await axios.get(
      `https://feeds.datagolf.com/betting-tools/outrights?market=win&odds_format=american&key=${process.env.DATAGOLF_KEY}`
    );
    const oddsData = response.data;
    return res.json(oddsData);
  } catch (err) {
    console.log({ err: err.message });
  }
};

export const getTopFive = async (req, res) => {
  try {
    const response = await axios.get(
      `https://feeds.datagolf.com/betting-tools/outrights?market=top_5&odds_format=american&key=${process.env.DATAGOLF_KEY}`
    );
    const topFiveOddsData = response.data;
    return res.json(topFiveOddsData);
  } catch (err) {
    console.log({ err: err.message });
  }
};

export const getTopTen = async (req, res) => {
  try {
    const response = await axios.get(
      `https://feeds.datagolf.com/betting-tools/outrights?market=top_10&odds_format=american&key=${process.env.DATAGOLF_KEY}`
    );
    const topTenOddsData = response.data;
    return res.json(topTenOddsData);
  } catch (err) {
    console.log({ err: err.message });
  }
};
