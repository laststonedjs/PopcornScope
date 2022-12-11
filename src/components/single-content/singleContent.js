import React from 'react';
import { Badge } from "@mui/material";
import { img_300, unavailable } from '../../config/config';
import './singleContent.css';

const SingleContent = ({
  id,
  poster,
  title,
  date,
  popularity,
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
        {popularity}
        <span className='subTitle'>{date}</span>
      </span>
    </div>
  );
}

export default SingleContent;