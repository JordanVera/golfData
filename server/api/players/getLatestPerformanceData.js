import axios from 'axios';

export const getLatestPerformanceData = async (req, res) => {
  try {
    await axios
      .get(
        `https://feeds.datagolf.com/historical-raw-data/rounds?tour=pga&event_id=all&year=${new Date().getFullYear()}&key=${
          process.env.DATAGOLF_KEY
        }`
      )
      .then(async (latestPlayerPerformaceData) => {
        try {
          const data = latestPlayerPerformaceData.data;

          console.log(data);

          return res.json(data);
        } catch (err) {
          console.log({ err: err.message });
        }
      });
  } catch (err) {
    console.log({ err: err.message });
  }
};
