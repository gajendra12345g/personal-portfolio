import React,{useState} from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';


function Header() {
  const[value, setValue]= useState();
  return (
   <React.Fragment>
    <AppBar sx={{background: '#065385'}}>
      <Toolbar>
      <Typography>
        PORTFOLIO
      </Typography>
      <Tabs sx={{marginLeft: 'auto'}} textColor='inherit' value={value} onChange={(e, value)=> setValue(value)}indicatorColor='success'>
        <Tab label="Home"/>
        <Tab label="Skills"/>
        <Tab label="Service"/>
        <Tab label="contact"/>
      </Tabs>
      </Toolbar>  
    </AppBar>
   </React.Fragment>
  )
}

export default Header