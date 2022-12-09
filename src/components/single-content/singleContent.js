import React from 'react';
import { img_300, unavailable } from '../../config/config';
import './singleContent.css';

const SingleContent = ({
  id,
  poster,
  title,
  date,
  vote_count,
  vote_average
}) => {
  return (
    <div className='media'>
      <img
        className='poster'
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title} />
      <b className='title'>{title}</b>
      <span className='subTitle'>{vote_count}</span>
      <span className='subTitle'>{date}</span>
    </div>
  )
}

export default SingleContent;