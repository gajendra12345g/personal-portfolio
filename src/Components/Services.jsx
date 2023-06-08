import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import Header from './Header';

const data = [
  { title: 'Web Developer', description: 'Web Developer Services', image: 'image1.jpg' },
  { title: 'FullStack Developer', description: 'FullStack Developer services', image: 'image1.jpg' },
  { title: 'Software Developer', description: 'Software Developer Services', image: 'image1.jpg' },
  { title: 'AI & ML Developer', description: 'AI & ML Developer Services', image: 'image1.jpg' },
  { title: 'React Developer', description: 'React Developer Services', image: 'image1.jpg' },
  { title: 'Angular Developer', description: 'Angular Developer Services', image: 'image1.jpg' },
];

const Services = () => {
  return (
    <>
      <Header />
      <Grid container spacing={2} style={{ paddingTop: '80px', paddingLeft:'100px' }}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} >
            <Card variant="outlined" className="small-card" sx={{ maxWidth: 250 ,maxHeight:250 }} >
              <CardMedia
                component="img"
                alt="Card Image"
                height="100"
                image={item.image}
                style={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" style={{ marginBottom: '8px' }}>
                  {item.title}
                </Typography>
                <Typography color="textSecondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Services;
