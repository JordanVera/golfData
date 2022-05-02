import React from 'react';
import { Carousel } from 'react-bootstrap';
import SpinnerCustom from '../Spinner.js';

export default function NewsCard({ news, loading }) {
  console.log('%cnews', 'color: red; font-size: 20px;');
  console.log(news);

  return loading ? (
    <SpinnerCustom />
  ) : (
    <Carousel>
      {news?.articles?.map((article) => {
        return (
          <Carousel.Item>
            <img
              className="newsBackgroundImg"
              src={article.image}
              alt={article.title}
              style={{
                width: '100%',
                height: '220px',
              }}
            />
            <Carousel.Caption>
              <div className="imgOverlay">
                <a href={article.url} target="_blank">
                  <h5>{article.title}</h5>
                  <p className="blue">{article.publishedAt}</p>
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
