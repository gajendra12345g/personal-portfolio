import React,{useState} from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  const[value, setValue]= useState();
  return (
   <React.Fragment>
    <AppBar sx={{background: '#818380'}}>
      <Toolbar>
      <Typography>
        PORTFOLIO
      </Typography>
      <Tabs sx={{marginLeft: 'auto'}} textColor='inherit' value={value} onChange={(e, value)=> setValue(value)}indicatorColor='success'>
      <Tab label="HERO" component={Link} to="/hero" />
      <Tab label="About" component={Link} to="/about" />
      <Tab label="Service" component={Link} to="/services" />
      <Tab label="Contact" component={Link} to="/contact" />
      </Tabs>
      </Toolbar>  
    </AppBar>
   </React.Fragment>
  )
}

export default Header