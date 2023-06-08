import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import { Email, } from '@mui/icons-material';
import Header from './Header';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // You can handle the form submission here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);

    // Clear the form fields
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <>
    <Header/>
    <Grid container spacing={2} justifyContent="center" sx={{paddingTop:"60px"}}>
      <Grid item xs={12} sm={6} md={4}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom>
              CONTACT
            </Typography>
            <Typography variant='h6'>Get in Touch</Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                color='success'
                value={name}
                onChange={handleNameChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Email"
                color='success'
                value={email}
                onChange={handleEmailChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Phone"
                color='success'
                value={phone}
                onChange={handlePhoneChange}
                fullWidth
                margin="normal"
              />
              <TextField
                color='success'
                label="Message"
                value={message}
                onChange={handleMessageChange}
                fullWidth
                margin="normal"
                multiline
                rows={4}
                required
              />
              <Button variant="contained" color='success' sx={{background:"#818380"}} type="submit" startIcon={<Email />} style={{ marginRight: 8 }}>
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </>
    
  );
};

export default Contact;
