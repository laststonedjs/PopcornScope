import React, { useState, useEffect } from 'react';
import axios from 'axios';
// components
import Carousel from './carousel/carousel';
// material UI helpers
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';
// config helpers
import { img_500, unavailable, unavailableLandscape } from '../../config/config';
// styles
import './contentModal.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  color: '#a6a6a6',
  border: '1px solid #596273',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '75%',
  background: 'linear-gradient(to left, #f2f2f2 0%, #e6f2ff 100%)',
  boxShadow: '0px 0px 120px -25px rgba(0,0,0, 0.5)',
  p: 4,
};

export default function ContentModal({ children, media_type, id }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();


  console.log(content);
  const fetchModalData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=4787c12f121422364a0dba37d88bc117&language=en-US`
    );

    setContent(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=4787c12f121422364a0dba37d88bc117&language=en-US`
    );

    console.log(data);
    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchModalData();
    fetchVideo();
    // eslint-disable-next-line 
  }, []);

  return (
    <>
      <div
        className='card_container'
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (
            <Box sx={style}>
              <div className='contentModal'>
                <img
                  className='contentLandscape'
                  src={content.poster_path ? `${img_500}/${content.poster_path}` : unavailable}
                  alt={content.name || content.title}
                />
                <img
                  className='contentPortrait'
                  src={content.backdrop_path ? `${img_500}/${content.backdrop_path}` : unavailableLandscape}
                  alt={content.name || content.title}
                />
                <div className='modalAbout'>
                  <span className='modalTitle'>
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  <span style={{ marginLeft: '4px', color: '#808080' }}>
                    {content.tagline && (
                      <i className="tagline">{content.tagline}</i>
                    )}
                  </span>
                  <span className='modalDescription'>
                    {content.overview}
                  </span>
                  <div>
                    <Carousel
                      media_type={media_type}
                      id={id}
                    />
                  </div>
                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                </div>
              </div>
            </Box>
          )}
        </Fade>
      </Modal>
    </>
  );
}