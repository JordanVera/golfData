import { useState, useEffect } from 'react';
import NewsCard from './NewsCard.js';
import { url } from '../../../config.js';

const NewsWidget = (props) => {
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect((_) => {
    const fetchNews = async (_) => {
      const res = await fetch(`${url}/recentNews`);
      const json = await res.json();

      setNews(json);
      setLoading(false);
    };

    fetchNews();
  }, []);

  return (
    <div className="newsWidget">
      <NewsCard news={news} loading={loading} />
    </div>
  );
};

export default NewsWidget;
