import axios from 'axios';

export const getLatestPerformanceData = async (req, res) => {
  try {
    try {
      const response = await axios.get(
        `https://feeds.datagolf.com/historical-raw-data/rounds?tour=pga&event_id=all&year=${new Date().getFullYear()}&key=${
          process.env.DATAGOLF_KEY
        }`
      );
      const latestPlayerPerformaceData = response.data;

      console.log(latestPlayerPerformaceData);

      return res.json(latestPlayerPerformaceData);
    } catch (err) {
      console.log({ err: err.message });
    }
  } catch (err) {
    console.log({ err: err.message });
  }
};
