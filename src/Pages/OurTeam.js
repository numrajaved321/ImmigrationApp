import React from 'react'
import Grid from '@mui/material/Grid';
import { Container, width } from '@mui/system';
import Typography from '@mui/material/Typography';

const OurTeam = () => {
  return (
    <>
        <div style={{ 
      backgroundImage: `linear-gradient( rgba(0,0,0,0.8), rgba(0,0,0,0.6) 100%), url("https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/page-title-5.jpg")`, 
    opacity:"inherit",
     height:"350px",
     
    
     
    }}>
         <Container>
     <Grid container sx={{textAlign:"bottom"}}>
        <Grid item xs={12} sm={12} md={12} lg={12} >
          <Typography>Our Team</Typography>
          <Typography>Home ----- Contact</Typography>
        </Grid>
        </Grid>
        </Container>
        
    </div>
    <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{textAlign:"center", marginY:"40px"}}>
            <Container>
             <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <img src='	https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/team-5.jpg' alt='image'/>
                    <Typography sx={{fontSize:"1.5rem", fontWeight:"600", color:"black"}}>Ceo Founder</Typography>
                    <Typography sx={{fontSize:"1rem", fontWeight:"400", color:"grey"}}>Thomas jack</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                <img src='https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/team-6.jpg' alt='image'/>
                    <Typography sx={{fontSize:"1.5rem", fontWeight:"600", color:"black"}}>Mark Lame</Typography>
                    <Typography sx={{fontSize:"1rem", fontWeight:"400", color:"grey"}}>Immigration Expert</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                <img src='https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/team-7.jpg' alt='image'/>
                    <Typography sx={{fontSize:"1.5rem", fontWeight:"600", color:"black"}}>Ben Cristropher</Typography>
                    <Typography sx={{fontSize:"1rem", fontWeight:"400", color:"grey"}}>Senior Engineer</Typography>
                </Grid>
             </Grid>
             <Grid container>
                <Grid item xs={4} sm={4} md={4} lg={4}></Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}></Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}></Grid>
             </Grid>
            </Container>
        </Grid>
    </Grid>
    <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{textAlign:"center", marginBottom:"40px"}}>
            <Container>
             <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <img src='	https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/team-5.jpg' alt='image'/>
                    <Typography sx={{fontSize:"1.5rem", fontWeight:"600", color:"black"}}>Ceo Founder</Typography>
                    <Typography sx={{fontSize:"1rem", fontWeight:"400", color:"grey"}}>Thomas jack</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                <img src='https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/team-6.jpg' alt='image'/>
                    <Typography sx={{fontSize:"1.5rem", fontWeight:"600", color:"black"}}>Mark Lame</Typography>
                    <Typography sx={{fontSize:"1rem", fontWeight:"400", color:"grey"}}>Immigration Expert</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                <img src='https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/team-7.jpg' alt='image'/>
                    <Typography sx={{fontSize:"1.5rem", fontWeight:"600", color:"black"}}>Ben Cristropher</Typography>
                    <Typography sx={{fontSize:"1rem", fontWeight:"400", color:"grey"}}>Senior Engineer</Typography>
                </Grid>
             </Grid>
             <Grid container>
                <Grid item xs={4} sm={4} md={4} lg={4}></Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}></Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}></Grid>
             </Grid>
            </Container>
        </Grid>
    </Grid>
    </>
  )
}

export default OurTeam