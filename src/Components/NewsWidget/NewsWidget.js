import { useState, useEffect } from 'react';
import NewsCard from './NewsCard.js';
import { Carousel } from 'react-bootstrap';

const NewsWidget = (props) => {
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/recentNews')
      .then((res) => res.json())
      .then((json) => {
        setNews(json);
        setLoading(false);
      });
  }, []);

  return (
    <div className="newsWidget">
      <h3 className="text-center">Latest PGA News</h3>
      <NewsCard news={news} loading={loading} />
    </div>
  );
};

export default NewsWidget;
