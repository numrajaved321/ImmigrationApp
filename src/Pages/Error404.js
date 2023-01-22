import React from 'react'
import Grid from '@mui/material/Grid';
import { Container, width } from '@mui/system';
import Typography from '@mui/material/Typography';

const Error404 = () => {
  return (
    <>
        <div style={{ 
      backgroundImage: `url("https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/page-title-6.jpg")`, 
    opacity:"inherit",
     height:"350px",
     
    
     
    }}>
         <Container>
     <Grid container sx={{textAlign:"bottom"}}>
        <Grid item xs={12} sm={12} md={12} lg={12} >
          <Typography>Error Page</Typography>
          <Typography>Home ----- Contact</Typography>
        </Grid>
        </Grid>
        </Container>
        
    </div>
    <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{textAlign:"center", marginY:"40px"}}>
            <Container>
             <Typography sx={{fontSize:"4.5rem", fontWeight:"800", color:"#ec4e4f"}}>404</Typography>
             <Typography sx={{fontSize:"2.5rem", fontWeight:"700", color:"black"}}>Oops! That page can not be found.</Typography>
             <Typography>Can not find what you need? Take a moment and do a search</Typography>
             
             <Typography>below or start from our Homepage.</Typography>
            </Container>
        </Grid>
    </Grid>
    </>
  )
}

export default Error404