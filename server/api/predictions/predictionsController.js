import axios from 'axios';
import chalk from 'chalk';

const getPredictions = async (req, res) => {
  try {
    const response = await axios.get(
      `https://feeds.datagolf.com/preds/pre-tournament?tour=pga&key=${process.env.DATAGOLF_KEY}`
    );

    let predictionsData = response.data;

    predictionsData.baseline.map((dataset) => {
      delete dataset.country;
      delete dataset.am;
      delete dataset.dg_id;
      delete dataset.sample_size;
    });

    predictionsData.baseline_history_fit.map((dataset) => {
      delete dataset.country;
      delete dataset.am;
      delete dataset.dg_id;
      delete dataset.sample_size;
    });

    return res.json(predictionsData);
  } catch (err) {
    console.log({ err: err.message });
  }
};

export default getPredictions;
