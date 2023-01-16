import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Container, width } from '@mui/system';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";
import Card from '@mui/material/Card';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Rating from '@mui/material/Rating';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import DraftsIcon from '@mui/icons-material/Drafts';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
const useStyles = makeStyles((theme) => ({
    multilineColor:{
        color:"white"
    },
    formField:{
        backgroundColor:"#476c92",
         color:"white" 
    },
    root: {
        "& .MuiFilledInput-root": {
            color:"white" ,
            backgroundColor:"#476c92",
        },
        input: {
          color: "white",
          height: "48px",
        },
    },
    formText:{
color:"white",
padding:"46px",
// marginLeft:"80px",
// marginRight:"80px",
    },
  
  }));
  
const PageSection2 = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(5);

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  return (
   <>

   <div style={{  backgroundImage: `url("https://visarzo.smartdemowp.com/wp-content/uploads/2020/07/pattern-4.png")`, 
     }}>
      <Container>
        <Grid container  className={classes.formText}>
            <Grid tem  xs={12} sm={12} md={6} lg={6}>
                <Typography variant='h4'> Get Free Assesment Today!</Typography>
                <Typography variant='h5'>Fell Free To Enquire About Any Questions You Got</Typography>
<div >
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
        <TextField
          id="filled-textarea"
           fullWidth
          placeholder="Password"
          className={classes.root}
          multiline
          InputProps={{
            className: classes.multilineColor
          }}
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          className={classes.root}
          fullWidth
          multiline
          InputProps={{
            className: classes.multilineColor
          }}
          placeholder="Message"
          margin="normal"
          rows={4}
         
          variant="filled"
        />
          <Button 
    variant="contained" 
    color="primary" 
    style={{ backgroundColor: '#ec4e4f' }}
  >
   <ArrowRightAltIcon/>   Send Message
  </Button>
        </div>
            </Grid>
            <Grid tem   md={0.5} lg={0.5}  ></Grid>
            <Grid tem  xs={12} sm={12} md={5.5} lg={5.5}  sx={{alignItems:"center"}} >
           
               <Typography  variant='h5'>Customer Ratings</Typography>
               <Rating
     size="large"
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography variant='h2'>4.8 / 5.0</Typography>
      <Typography variant='h4'>By 1500+ Visa Approved Customers</Typography>
     
        <Grid container spacing={2} sx={{alignItems:"center"}}>
      
            <Grid item sx={6} sm={6} md={2} lg={2}><PhoneCallbackIcon sx={{fontSize:"83px"}}/></Grid>
            <Grid item sx={6} sm={6} md={10} lg={10}> <Typography variant='h8' sx={{display:"flex", justifyContent:"flex-start"}}>Any Questions? Call us</Typography>
           
            <Typography variant='h7'>+1 (246) 333 0079</Typography>
            </Grid>
            
        </Grid>
      
     
     
      <Box>
        <Grid container spacing={2} sx={{alignItems:"center"}}>
      
            <Grid item sx={6} sm={6} md={2} lg={2} ><DraftsIcon sx={{fontSize:"83px"}}/> </Grid>
            <Grid item sx={6} sm={6} md={10} lg={10}> <Typography variant='h8' sx={{display:"flex", justifyContent:"flex-start"}}>Any Questions? Email us</Typography>
            
            <Typography variant='h7'>inquiry@example.com</Typography>
            </Grid>
            
        </Grid>
      
     
      </Box>
      
            </Grid>
        </Grid>
        </Container>
     </div>
        {/****************************************** Another Section ****************************************************/}
    <Container>
        <Grid container  sx={{alignItems:"center", padding:"26px"}}>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{textAlign:"center"}}>
              <Typography variant='h9'>HOW WE HELP CLIETNTS</Typography>
              <Typography variant='h3'>World Immigration</Typography>
              <Typography variant='h3'> News & Updates</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} >
                <Typography variant='paragraph'>We provide a skilled staff to help you get the most out of your immigration. Our qualified and dependable Immigration Consultants can assist you in obtaining a favorable result in your case.</Typography>
            </Grid>
        </Grid>
        </Container>
          {/****************************************** Cards Section ****************************************************/}
          <Container>
          <Grid container spacing={3} sx={{paddingX:"16px", marginY:"28px" }}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card >
      <CardMedia
        component="img"
        height="200"
        image="https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/news-2.jpg"
        alt="green iguana"
      />
     
      <CardContent sx={{backgroundColor:"#eff2f5"}} >
       
       <Typography variant='h4'> The Human Rights and Democracy Programme</Typography>
       <Typography variant='h7'>By admin | Europe Permit</Typography>
       
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"flex-start", backgroundColor:"#eff2f5"}}>
        <Button sx={{color:"black"}}>Read More <ArrowRightAltIcon sx={{color:"darkblue"}}/></Button>
        </CardActions>
    </Card>
            </Grid>
            
            <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card >
      <CardMedia
        component="img"
        height="200"
        image="	https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/news-3.jpg"
        alt="green iguana"
      />
     
      <CardContent sx={{backgroundColor:"#eff2f5"}} >
       
       <Typography variant='h4'> Customers Applying for Priority Visas (PVs) ..</Typography>
       <Typography variant='h7'>By admin | Study Visa</Typography>
       
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"flex-start", backgroundColor:"#eff2f5"}}>
        <Button sx={{color:"black"}}>Read More <ArrowRightAltIcon sx={{color:"darkblue"}}/></Button>
        </CardActions>
    </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card >
      <CardMedia
        component="img"
        height="200"
        image="	https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/news-1.jpg"
        alt="green iguana"
      />
     
      <CardContent sx={{backgroundColor:"#eff2f5"}} >
       
       <Typography variant='h4'> Customers Applying for Priority Visas (PVs) ..</Typography>
       <Typography variant='h7'>By admin | Study Visa</Typography>
       
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"flex-start", backgroundColor:"#eff2f5"}}>
        <Button sx={{color:"black"}}>Read More <ArrowRightAltIcon sx={{color:"darkblue"}}/></Button>
        </CardActions>
    </Card>
            </Grid>
        </Grid>
        </Container>
           {/****************************************** Another Section ****************************************************/}
           <Container>
           <Grid container sx={{padding:"36px", }}>
            <Grid item xs={6} sm={6} md={3} lg={3} sx={{textAlign:"center"}}>
            <img src="https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/clients-logo-1.png"  alt="Second slide" />
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3} sx={{textAlign:"center"}}><img src="https://visarzo.smartdemowp.com/wp-content/uploads/2020/07/clients-logo-3.png" alt="logo4"/></Grid>
            <Grid xs={6} sm={6} md={3} lg={3} sx={{textAlign:"center"}}><img src="https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/clients-logo-4.png" alt="logo4"/></Grid>
            <Grid xs={6} sm={6} md={3} lg={3} sx={{textAlign:"center"}}><img src="https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/clients-logo-2.png" alt="logo4"/></Grid>
            
           </Grid>
           </Container>
   </>
  )
}

export default PageSection2