import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Searchbar({ data, placeholder }) {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.player_name
        .split(',')
        .reverse()
        .join(' ')
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  return (
    <div className="search animate__animated animate__fadeIn">
      <div className="searchInputs animate__animated animate__fadeIn">
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="rgba(240, 240, 240, .65)"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z" />
            </svg>
          ) : (
            <svg
              id="clearBtn"
              xmlns="http://www.w3.org/2000/svg"
              fill="rgba(240, 240, 240, .65)"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              // onClick={}
            >
              <path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" />
            </svg>
          )}
        </div>
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((golfer, key) => {
            return (
              <Link className="dataItem" to={`/players/${golfer.dg_id}`}>
                <p>{golfer.player_name.split(',').reverse().join(' ')}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
