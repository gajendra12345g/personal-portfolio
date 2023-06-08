import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import axios from 'axios';
import Header from './Header';

const imageStyle = {
  width: '100vw',
  height: '100vh',
  backgroundImage:
    'url("https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  opacity: '0.8',
  position: 'fixed',
  top: 0,
  left: 0,
};

const textStyle = {
  textAlign: 'center',
  paddingTop: '20%',
  
};

const profilePhotoStyle = {
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  margin: '0 auto',
};

function Hero() {
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    axios
      .request({
        url: 'http://localhost:3031/hero',
        method: 'GET',
      })
      .then((response) => {
        console.log(response);
        setHeroData(response.data);
      });
  }, []);

  return (
    <Container fixed>
      <Header/>
      <Box >
        <Box sx={textStyle}>
          {heroData.map((hero, index) => {
            return (
              <div key={index}>
                <img src={hero.profile} alt="Profile" style={profilePhotoStyle} />
                <h1>{hero.title}</h1>
                <span>{hero.description}</span>
              </div>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
}

export default Hero;
