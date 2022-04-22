import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const getRecentNews = async (req, res) => {
  axios
    .get(
      `https://gnews.io/api/v4/search?q=pga&sortBy=publishedAt&max=8&token=${process.env.NEWS_KEY}`
    )
    .then(async (oddsData) => {
      try {
        const d = oddsData.data;
        // console.log(d);
        return res.json(d);
      } catch (err) {
        console.log({ err: err.message });
      }
    });
};

export default getRecentNews;
