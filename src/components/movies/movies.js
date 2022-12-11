import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleContent from '../single-content/singleContent';
import './movies.css';

export default function MovieContainer() {
  const [content, setContent] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=4787c12f121422364a0dba37d88bc117&language=en-US&sort_by=popularity.desc&include_video=true&page=1&with_watch_monetization_types=flatrate`
    );

    console.log(data.results);
    setContent(data.results);
  }

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <div className='movie-wrapper'>
      <span className="page-title">Top Rated Movies</span>
      <div className='top-rated-movies'>
        {content && content.map((c) => (
          <SingleContent
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            overview={c.overview}
            date={c.release_date || c.first_air_date}
            vote_average={c.vote_average}
            media_type="movie"
          />
        ))}
      </div>
    </div>
  );
}