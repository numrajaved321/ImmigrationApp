import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HouseIcon from '@mui/icons-material/House';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Header = () => {
  return (
    <Box sx={{ width: '100%',bgcolor: '#162e40', fontSize:'11px', color:'#ffff', padding:"16px"}}>
        <Grid container>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              
                 <Box sx={{display:"flex"}}> <HouseIcon sx={{color:"#ec4e4f"}}/>  <Typography sx={{textAlign:"center",paddingLeft:"3px"}}> 72 Main Drive, Calibry, FL</Typography> </Box> 
                    </Grid>
                    
                    <Grid item xs={12} sm={12} md={2} lg={2}>
                    <Box sx={{display:"flex"}}>  <DraftsIcon sx={{color:"#ec4e4f"}}/>  <Typography sx={{textAlign:"center",paddingLeft:"3px"}}>inquiry@example.com</Typography> </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={2}>
                    <Box sx={{display:"flex"}}>< AccessTimeIcon sx={{color:"#ec4e4f"}}/>  <Typography sx={{textAlign:"center", paddingLeft:"3px"}}>Mon - Fri : 0900 to 1800</Typography> </Box>
              
               
    

            </Grid>
            <Grid item  md={3} lg={3} >
                </Grid>
            <Grid item sx={{textAlign:"center"}} xs={12} sm={12} md={3} lg={3} >
                <Box sx={{display:"flex", justifyContent:"space-betwwen",textAlign:"center" }}>
                <Box sx={{display:"flex", textAlign:"center"}}>
<FacebookRoundedIcon/> <InstagramIcon/> <TwitterIcon/> <LinkedInIcon/>
</Box>
                </Box>
            </Grid>
        </Grid>
        </Box>
  )
}

export default Header