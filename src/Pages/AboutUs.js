import React from 'react'
import Grid from '@mui/material/Grid';
import { Container, width } from '@mui/system';
import Typography from '@mui/material/Typography';

const AboutUs = () => {
  return (
    <>
        <div style={{ 
      backgroundImage: `url("https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/page-title.jpg")`, 
    opacity:"inherit",
     height:"350px",
     
    
     
    }}>
         <Container>
     <Grid container sx={{alignItems:"bottom"}}>
        <Grid item xs={12} sm={12} md={12} lg={12} >
          <Typography>About Us</Typography>
          <Typography>Home ----- Contact</Typography>
        </Grid>
        </Grid>
        </Container>
        
    </div>
    </>
  )
}

export default AboutUs