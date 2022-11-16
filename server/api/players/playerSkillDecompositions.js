// https://feeds.datagolf.com/preds/player-decompositions?tour=[ tour ]&file_format=[ file_format ]&key=c1d997187e115daeeb62952ae5b4
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const getPlayerSkillDecompositions = async (req, res) => {
  try {
    const response = await axios.get(
      `https://feeds.datagolf.com/preds/player-decompositions?key=${process.env.DATAGOLF_KEY}`
    );

    const skillDecompositionData = response.data;
    return res.json(skillDecompositionData);
  } catch (err) {
    console.log({ err: err.message });
  }
};
