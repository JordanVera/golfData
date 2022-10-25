import axios from 'axios';

const liveStrokesGainedData = async (req, res) => {
  try {
    const response = await axios.get(
      `https://feeds.datagolf.com/preds/live-hole-stats?tour=pga&key=${process.env.DATAGOLF_KEY}`
    );

    const strokesGainedData = response.data;

    console.log(strokesGainedData);

    return res.json(strokesGainedData);
  } catch (err) {
    console.log({ err: err.message });
  }
};

export default liveStrokesGainedData;
