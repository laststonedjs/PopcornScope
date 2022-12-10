import React from 'react';
import { Badge } from "@mui/material";
import { img_300, unavailable } from '../../config/config';
import './singleContent.css';

const SingleContent = ({
  id,
  poster,
  title,
  release_date,
  vote_count,
  vote_average
}) => {
  return (
    <div className='media'>
      <Badge
        className='badge'
        badgeContent={vote_average}
        color={vote_average > 6 ? 'primary' : 'secondary'}
      />
      <img
        className='poster'
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className='title'>{title}</b>
      <span className='subTitle'>
        {vote_count}
        <span className='subTitle'>{release_date}</span>
      </span>
    </div>
  );
}

export default SingleContent;