import React from 'react'
import Grid from '@mui/material/Grid';
import { Container, width } from '@mui/system';
import Typography from '@mui/material/Typography';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

const Contact = () => {
  return (
    <>
 
        <div style={{ 
      backgroundImage: `linear-gradient( rgba(0,0,0,0.8), rgba(0,0,0,0.6) 100%), url("https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/page-title-6.jpg")`, 
    
     height:"350px",
     
    
     
    }}>
         <Container>
     <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{alignItems:"bottom"}}>
          <Typography>Contact Us</Typography>
          <Typography>Home ----- Contact</Typography>
        </Grid>
        </Grid>
        </Container>
        
    </div>
    <Grid container>
     <Grid item xs={12} sm={12} md={12} lg={12}>  
    <Container>
     <Grid container>
        <Grid item xs={6} sm={6} md={6} lg={6}>
        <Typography>HOW WE HELP CLIENTS</Typography>
        <Typography>Got Immigration or</Typography>
        <Typography>Visa Problems</Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
        <Typography>We are always ready to help customers with any difficulty about the experience aute irure dolor in reprehenderit cepteur sint ocae cat cupidatat non proident sunt in culpa quis.</Typography>

        </Grid>
     </Grid>
     <Grid container>
        <Grid item xs={12} sm={12} md={2} lg={12}>
            Map
        </Grid>
        </Grid>
        <Grid container>
        <Grid item xs={12} sm={12} md={2} lg={12} sx={{alignItems:"center"}}>
          <Typography> Lets Start Conversation Today</Typography>
        </Grid>
        </Grid>
    </Container>
    </Grid>
    </Grid>
    </>
  )
}

export default Contact