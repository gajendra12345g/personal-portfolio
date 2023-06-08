import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CakeIcon from '@mui/icons-material/Cake';
import SchoolIcon from '@mui/icons-material/School';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Header from "./Header";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { Typography } from '@mui/material';

const profilePhotoStyle = {
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  margin: '0 auto',
};

export default function About() {
  return (
    <>
      <Header/>
      <div>
        <div style={{paddingTop:"60px" , display:"flex", justifyContent:"center"}} >
        <Typography sx={{marginRight:"100px"}}><img src={("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2pQdQZZItMNz6HlQSyv7uT4vzLCkmcVg-IlrThqAoNw&s")} alt="Profile" style={profilePhotoStyle} /></Typography>
        <Typography sx={{paddingTop:"20px",fontFamily:" 'Dancing Script', cursive"}}>Hi! My name is Gajendra Singh. I am a Web Developer, <br/>
          and I'm very passionate and dedicated to my work. <br/>
          With 1 years experience as a professional Web developer,<br/>
          I have acquired the skills and knowledge necessary to make<br/>
          your project a success.</Typography>
       </div>
      </div>
     
      <div style={{ display: 'flex' ,paddingLeft:"20px", justifyContent:"center"}}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' ,paddingTop:'20px' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CakeIcon color='action' />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Birthday" secondary="Aug 14, 2000" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AddLocationIcon color='action' />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Location" secondary="Indore" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
              <SchoolIcon color="action"/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Education" secondary="MCA From Medicaps-University" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                 <AccountBoxIcon color="action"/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Profile" secondary="Software Developer" />
          </ListItem>
        </List>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', paddingTop:"20px"}}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
               <LocalPhoneIcon color='action'/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Phone No" secondary="7828203667" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
              <MarkEmailReadIcon color="action"/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Email ID" secondary="rgajendrar@gmail.com" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
              <CastForEducationIcon color='action'/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Degree" secondary="Master" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
              <AddTaskIcon color="action"/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Skills" secondary="React And Java Script" />
          </ListItem>
        </List>
      </div>
    </>
  );
}
