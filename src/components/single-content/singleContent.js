import React from 'react';
// assets
import { Badge } from "@mui/material";
import { img_300, unavailable } from '../../config/config';
// import infos from '../../constants/infos.json';
// styles
import './singleContent.css';

const SingleContent = ({
  id,
  poster,
  title,
  overview,
  date,
  media_type,
  vote_average
}) => {

  // const cast = infos.map(actor => (
  //   <p key={actor}>{actor}</p>
  // ));

  // const CardInfo = ({ name, value }) => (
  //   <div className={`card_${name}`}>
  //     <span className='info_head'>
  //       {name.replace(/\b\w/g, l => l.toUpperCase())}
  //     </span>
  //     {value}
  //   </div>
  // );

  // const getUrl = (poster) => {
  //   let url = `/${poster}.jpg`;
  //   return url;
  // }

  return (
    <div className='wrapper'>
      <div className='card_container'>
        <Badge
          className='badge'
          badgeContent={vote_average}
          color={vote_average > 6 ? 'secondary' : 'primary'}
        />
        <div className='card'>
          <img
            className='poster'
            src={poster ? `${img_300}/${poster}` : unavailable}
            alt={title}
          />
          <h1 className='title'>{title}</h1>
          <span className='mediaType'>{media_type === "tv" ? "TV Series" : "Movie"}</span>
          <span className='subTitle'><b>Release Date</b> {date}</span>
        </div>
      </div>
    </div>
  );
}

export default SingleContent;