import React from 'react';
// assets
import { Badge } from "@mui/material";
import { img_300, unavailable } from '../../config/config';
// import infos from '../../constants/infos.json';
// styles
import './singleContent.css';
import ContentModal from '../modal/contentModal';

const SingleContent = ({
  id,
  poster,
  title,
  overview,
  date,
  media_type,
  vote_average
}) => {

  return (
    <div className='wrapper'>
      <ContentModal media_type={media_type} id={id}>
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
      </ContentModal>
    </div>
  );
}

export default SingleContent;