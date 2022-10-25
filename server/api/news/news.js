import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const getRecentNews = async (req, res) => {
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/search?q=pga&sortBy=publishedAt&max=8&token=${process.env.NEWS_KEY}`
    );

    const oddsData = response.data;

    return res.json(oddsData);
  } catch (err) {
    console.log({ err: err.message });
  }
};

export default getRecentNews;
