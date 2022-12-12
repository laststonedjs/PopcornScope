import React, { useState, useEffect } from 'react'
import axios from 'axios';
// components
import SingleContent from '../single-content/singleContent';
// stlyes
import './shows.css';

const ShowsContainer = () => {
  const [content, setContent] = useState([]);
  let n = 10;

  const fetchShows = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=4787c12f121422364a0dba37d88bc117&language=en-US&sort_by=vote_average.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
    );

    console.log(data.results);
    setContent(data.results);
  };

  useEffect(() => {
    // eslint-disable-next-line
    fetchShows();
  }, []);

  return (
    <div className='shows-wrapper'>
      <span className="page-title">Top Rated TV Shows</span>
      <div className='top-rated-shows'>
        {content && content.slice(0, n).map((c) => (
          <SingleContent
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.name || c.title}
            date={c.release_date || c.first_air_date}
            vote_average={c.vote_average}
            media_type="tv"
            vote_count={c.vote_count}
          />
        ))}
      </div>
    </div>
  );
}

export default ShowsContainer;