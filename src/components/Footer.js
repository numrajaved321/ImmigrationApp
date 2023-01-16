import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  multilineColor:{
      color:"white"
  },
  formField:{
      backgroundColor:"#2a3c4e",
       color:"white" 
  },
  root: {
      "& .MuiFilledInput-root": {
          color:"white" ,
          backgroundColor:"#2a3c4e",
      },
      input: {
        color: "white",
        height: "18px",
      },
  },
  formText:{
color:"white",
padding:"46px",
// marginLeft:"80px",
// marginRight:"80px",
  },

}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box sx={{ width: '100%',  marginTop:'20px;',bgcolor: '#0C2136', fontSize:'11px', color:'#ffff' , padding:"26px" }}>
    <Container sx={ {textAlign:'left'} }>
<Grid container spacing={3}>

<Grid item xs={6} md={3}>
<Typography variant='h6'>Immigration</Typography>
<Typography>Integer lobortis sem consequat imperdiet In nulla viverra ut lorem ut, dapibus conse etur diam. Nun bibendum diet condiment sed ipsum duis lacinia.</Typography>
<Box sx={{display:"flex", justifyContent:"space-between"}}>
<FacebookRoundedIcon/> <InstagramIcon/> <TwitterIcon/> <LinkedInIcon/>
</Box>

</Grid>
<Grid item xs={6} md={3}>

<Typography variant='h6'>Immigration</Typography>
<Typography >Take IELTS</Typography>
<Typography>PTE Coaching </Typography>
<Typography>Sat Coaching</Typography>
<Typography>Student Visa </Typography>
<Typography>Immigration Visa</Typography>
<Typography>Diploma Visa</Typography>

</Grid>
<Grid item xs={6} md={3}>
<Typography variant='h6'>Quick Links</Typography>
<Typography>About Us</Typography>
<Typography>Our Team</Typography>
<Typography>Our Coaching</Typography>
<Typography>Study Visas</Typography>
<Typography>Our Service</Typography>
<Typography>Contact Us</Typography>
</Grid>
<Grid item xs={6} md={3}>

<Typography  variant="h6" sx={{color:'#f85606'}}>
       News Letter Signup
      </Typography>
      <Typography  variant="h6" sx={{color:'#ffff'}}>
      Enter your email address to get latest updates and offers from us. Also some Discount coupons.
       
      </Typography>
      <TextField
        id="filled-textarea"
        fullWidth
       placeholder="Email"
       className={classes.root}
       multiline
       InputProps={{
         className: classes.multilineColor
       }}
       margin="normal"
       variant="filled"
        />

</Grid>
</Grid>
<Divider sx={{ background: 'white', marginY:"18px" }} />
<Grid container >
    <Grid item xs={6} md={6}>
    <Typography>(©) 2020 VISARZO Immigration & Visa Firm. All rights reserved</Typography>

    </Grid>

    <Grid item xs={6} md={6}>
    <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
         
         justifyContent:"flex-end"
         
        }}
      >
        <Typography>Home</Typography>
        <Divider orientation="vertical"  sx={{ background: 'white', marginX:"8px" }} variant="middle" flexItem />
        <Typography>About</Typography>
        <Divider orientation="vertical"  sx={{ background: 'white', marginX:"8px" }} variant="middle" flexItem />
        <Typography>Contact</Typography>
      </Box>
    </Grid>
</Grid>

</Container>

</Box>
  )
}

export default Footer