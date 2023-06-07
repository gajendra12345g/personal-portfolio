import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import axios from 'axios';
const imageStyle = {
  width: "100vw",
  height: "100vh",
  backgroundImage:
    'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubohA9irzUmInQfE3zbZzdP1PheI4VyFgHA&usqp=CAU")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  opacity: "0.8",
  position: "fixed",
  top: 0,
  left: 0,
};

const textStyle = {
  textAlign: "center",
  paddingTop:"20%"
  
};

function Hero() {
const [heroData,setHeroData]=useState([])

useEffect(()=>{
        axios.request({
          url:"http://localhost:3031/hero",
          method:"GET"
      })
      .then((response)=>{
        console.log(response);
        setHeroData(response.data)
        })
    },[])


  return (
    <Container fixed>
      <Box sx={imageStyle}>
        <Box sx={textStyle}>
         {
            heroData.map((hero)=>{
                return (
                    <>
                    <h1>{hero.title}</h1>
                    <span>{hero.description}</span>
                    </>
                )
            })
         }
        </Box>
      </Box>
    </Container>
  );
}

export default Hero;

