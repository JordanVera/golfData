import axios from 'axios';

const liveStrokesGainedData = async (req, res) => {
  try {
    await axios
      .get(
        `https://feeds.datagolf.com/preds/live-hole-stats?tour=pga&key=${process.env.DATAGOLF_KEY}`
      )
      .then(async (strokesGainedData) => {
        try {
          const strokesGained = strokesGainedData.data;

          console.log(strokesGained);

          console.log({
            msg: 'Succesfully retrieved live strokes gained data from datagolf API.',
          });

          return res.json(strokesGained);
        } catch (err) {
          console.log({ err: err.message });
        }
      });
  } catch (err) {
    console.log({ err: err.message });
  }
};

export default liveStrokesGainedData;
