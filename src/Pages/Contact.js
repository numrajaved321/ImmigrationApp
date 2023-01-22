import React from 'react'
import Grid from '@mui/material/Grid';
import { Container, width } from '@mui/system';
import Typography from '@mui/material/Typography';

const Contact = () => {
  return (
    <>
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