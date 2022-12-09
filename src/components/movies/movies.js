import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleContent from '../single-content/singleContent';
import './movies.css';

export default function MovieContainer() {
  const [content, setContent] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_OMDB_API_KEY}&language=en-US&page=1`
    );

    console.log(data.results);
    setContent(data.results);
  }

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <div className='top-rated-movies'>
      {content && content.map((c) => (
        <SingleContent
          key={c.id}
          id={c.id}
          poster={c.poster_path}
          title={c.title}
          data={c.first_air_date}
          vote_average={c.vote_average}
          vote_count={c.vote_count}
        />
      ))}
    </div>
  );
}