import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import userLogo from '../assets/user-logo.png'
import { AuthContext } from '../contexts/AuthContexts';

export default function Profile() {
    const {currentUser} = React.useContext(AuthContext);
    const myCard = {margin: "4rem auto"}
  return (
      <div>
          <h1>Profile</h1>
      
    <Card sx={{ maxWidth: 345 }} style={myCard}>
      <CardActionArea>
      <Typography gutterBottom variant="h6" component="div" color='primary' style={{textAlign: "center"}}>
            Welcome 
        </Typography>
        <CardMedia
          component="img"
          height="140"
          image={userLogo}
          alt="user"
        />
        <CardContent>

          <Typography gutterBottom variant="h6" component="div" color='primary' style={{textAlign: "center"}}>
          {currentUser.email}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
