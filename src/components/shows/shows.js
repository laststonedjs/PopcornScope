import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SingleContent from '../single-content/singleContent';
import './shows.css';

const ShowsContainer = () => {
  const [content, setContent] = useState([]);

  const fetchShows = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=4787c12f121422364a0dba37d88bc117&language=en-US&page=1`
    );

    console.log(data.results);
    setContent(data.results);
  };

  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <div className='top-rated-shows'>
      {content && content.map((c) => (
        <SingleContent
          key={c.id}
          id={c.id}
          poster={c.poster_path}
          title={c.title}
          release_date={c.release_date}
          vote_average={c.vote_average}
          vote_count={c.vote_count}
        />
      ))}
    </div>
  );
}

export default ShowsContainer;