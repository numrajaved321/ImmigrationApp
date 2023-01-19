import React from 'react'
import Grid from '@mui/material/Grid';
import { Container, width } from '@mui/system';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import FestivalIcon from '@mui/icons-material/Festival';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import GroupIcon from '@mui/icons-material/Group';
import { makeStyles } from "@mui/styles";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const useStyles = makeStyles((theme) => ({
  heroImage: {
    // background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("photographer.jpg");
    // height: 50%;
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
    // position: relative;
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    height:"50%",
    backgroundPosition:"center",
    backgroundSize:"cover",
    position:"relative",
    // backgroundImage:`url("https://visarzo.smartdemowp.com/wp-content/uploads/2020/07/immigration-1.jpg")`
  },
  
  heroText: {
    textAlign:"center",
    position:"absolute",
    top:"50%",
    left:"50%",
    transform: "translate(-50%, -50%)",
    color:"white",
    fontFamily:"sans-serif"
  },
  heroText2: {
    textAlign:"bottom",
    position:"absolute",
    top:"80%",
    left:"50%",
    transform: "translate(-50%, -50%)",
    color:"white",
    fontFamily:"sans-serif"
   
  },
  Typo:{
    fontFamily:"sans-serif"
  },
  TypoCard:{
    color:"black",
     fontFamily:"sans-serif",
     fontSize:"26px",
     lineHeight:"32px",
     fontWeight:"600"
  },
  countriesTypo:{
  
    fontSize: "12px",
    lineHeight: "20px",
    color: "#777777",
    textTransform: "uppercase",
    fontWeight: "600",
    letterSpacing: "1px"
  },
  countriesHead:{
    fontSize: "2.5rem",
    lineHeight: "57px",
    color: "black",
    fontWeight: "700",
    
  },
  ratingText:{
    fontSize: "0.5rem",
    lineHeight: "26px",
    color: "#2d5883",
    fontWeight: "600",
    
  }

}));
const PageSection1 = () => {
  const classes = useStyles();
  return (
    <>
  
    <Grid container mt={4}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
        <div style={{ 
      backgroundImage: `url("https://visarzo.smartdemowp.com/wp-content/uploads/2020/07/about-1.jpg")`, 
     marginLeft:"80px",
     marginRight:"80px",
     height:"350px",
     
    
     
    }}>
          <div style={{paddingY:"120px", display:"flex", justifyContent:"center"}}>
      <Card sx={{backgroundcolor:"white", width:"250px", marginTop:"35%",
    display: "inline-block"}} centered>
       <Box sx={{border:"4px solid blue", padding:"16px",}}>
        <Typography variant="h8">Americas Leading Visa & immigrartion Lawyer With</Typography>
        <Typography variant="h4">24</Typography>
        <Typography variant="h6">Years of Experience</Typography>
        </Box>
        </Card>
       
       </div>
    </div>
            {/* <Box sx={{backgroundImage:"background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://visarzo.smartdemowp.com/wp-content/uploads/2020/07/about-1.jpg);"}}> */}
          {/* <img src="https://visarzo.smartdemowp.com/wp-content/uploads/2020/07/about-1.jpg"  alt="Second slide" /> */}
          <Box sx={{bgcolor:"white", }}>
        
        {/* <Box sx={{bgcolor:"white", border:"3px solid blue", pading:"16px", textAlign:"center"}}>
        <Typography variant="h8">Americas Leading Visa & immigrartion Lawyer With</Typography>
        <Typography variant="h1">24</Typography>
        <Typography variant="h4">Years of Experience</Typography>
        </Box>
         </Box> */}
      
       </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} >
            <Box sx={{padding:"16px", alignItems:"center", }}>
            <Typography className={classes.Typo} variant="h8">Who are visarzo</Typography>
            <Typography className={classes.Typo} variant="h4"><b>Not Just Trandtional Visa and Immigration Firm</b></Typography>
            <Typography className={classes.Typo} variant="h6">Sponsoring and managing work visas parts now becoming results in the experience.</Typography>
            <Typography className={classes.Typo} variant="h7">The Most Trusted Immigration and Visa Consultant. There are locations in the United states of america as well as internationally. The organization was established in 2000 on the basis of a small idea conceived by its promoters! We assist applicants in navigating the immigration process to any country in which they choose to live.</Typography>
            </Box>
            </Grid>
    </Grid>
        {/****************************************** Cards ****************************************************/}
       <Container>
        <Grid container spacing={3} sx={{paddingX:"16px", marginTop:"32px"  }}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card  >
      <CardMedia
        component="img"
        height="140"
        image="https://visarzo.smartdemowp.com/wp-content/uploads/2020/07/feature-1.jpg"
        alt="green iguana"
      />
     
      <CardActions sx={{textAlign:"center",display:"flex", justifyContent:"center"}}>
        <Button  ><Typography className={classes.TypoCard}>Apply Online</Typography></Button>
      
      </CardActions>
    </Card>
            </Grid>
            
            <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card >
      <CardMedia
        component="img"
        height="140"
        image="https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/feature-2.jpg"
        alt="green iguana"
      />
     
      <CardActions sx={{textAlign:"center",display:"flex", justifyContent:"center"}}>
        <Button ><Typography className={classes.TypoCard}>Apply Online</Typography></Button>
      
      </CardActions>
    </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card >
      <CardMedia
        component="img"
        height="140"
        image="https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/feature-3.jpg
        "
        alt="green iguana"
      />
     
      <CardActions sx={{textAlign:"center",display:"flex", justifyContent:"center"}}>
        <Button><Typography className={classes.TypoCard}>Apply Online</Typography></Button>
      
      </CardActions>
    </Card>
            </Grid>
        </Grid>
        </Container>
    {/****************************************** Another Section ****************************************************/}
  
    <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{backgroundColor:"#2d5883", }}>
      
            <Box sx={{padding:"24px", textAlign:"center", color:"white"}} >
                
            <Typography variant="h4">Unparalleled Consultancy from Experienced Lawyers</Typography>
            <Typography variant="h8"><span sx={{color:"Pink"}}>------------</span>Visarzo gives their consultancy by a registered and experienced lawyer.<span sx={{color:"Pink"}}>------------</span></Typography>
            </Box>
        </Grid>
        </Grid>
       
          {/****************************************** Carousel ****************************************************/}
          <Container>
          <Grid container sx={{padding:"24px"}}>
          <Grid xs={12} sm={12} md={12} lg={12} >
            <Grid container sx={{padding:"16px", }}>
              <Grid item xs={12} sm={12} md={6} lg={6} sx={{padding:"26px"}}>
              <Typography className={classes.Typo} variant='paragraph'>How We Help Clients</Typography>

               <Typography className={classes.Typo} variant='h3'>Level With Great Visa</Typography>
               <Typography className={classes.Typo} variant='h3'>Serving Policies</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} sx={{padding:"26px",alignItems:"center", marginTop:"8px"}}>
                <Typography className={classes.Typo} variant='paragraph'>We provide a skilled staff to help you get the most out of your immigration. Our qualified and dependable Immigration Consultants can assist you in obtaining a favorable result in your case.</Typography>
              </Grid>
            </Grid>
           
          </Grid>
         
          <Grid xs={12} sm={12} md={12} lg={12}>
         <OwlCarousel className='owl-theme' loop margin={6}  nav>
    <div class='item'>
        <Card >
          <CardContent>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} sx={{textAlign:"center"}}>
               
               <LocalLibraryIcon sx={{color:"162e40", fontSize:"68px"}} />
               
                <Box sx={{ paddingTop:"16px", textAlign:"center"}}>
                <Typography variant='h9'>Visa Types</Typography>
                <Typography variant='h6'>Study Visas</Typography>
                <Typography variant="paragraph">A visa is a conditional permission provided by a region to a foreigner to enter, stay in, or leave that country.</Typography>
                </Box>
            
               
             
            </Grid>
            </Grid>
          </CardContent>
        </Card>
    </div>
    <div class='item'>
    <Card >
          <CardContent>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} sx={{textAlign:"center"}}>
               
               <FestivalIcon sx={{color:"162e40", fontSize:"68px"}} />
               
                <Box sx={{ paddingTop:"16px", textAlign:"center"}}>
                <Typography variant='h9'>Visa Types</Typography>
                <Typography variant='h6'>Tourist Visas</Typography>
                <Typography variant="paragraph">A visa is a conditional permission provided by a region to a foreigner to enter, stay in, or leave that country.</Typography>
                </Box>
            </Grid>
            </Grid>
          </CardContent>
        </Card>
    </div>
    <div class='item'>
    <Card >
          <CardContent>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} sx={{textAlign:"center"}}>
               
               <GroupIcon sx={{color:"162e40", fontSize:"68px"}} />
               
                <Box sx={{ paddingTop:"16px", textAlign:"center"}}>
                <Typography variant='h9'>Visa Types</Typography>
                <Typography variant='h6'>Working Visas</Typography>
                <Typography variant="paragraph">A visa is a conditional permission provided by a region to a foreigner to enter, stay in, or leave that country.</Typography>
                </Box>
            </Grid>
            </Grid>
          </CardContent>
        </Card>
   
    </div>
    <div class='item'>
    <Card >
          <CardContent>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} sx={{textAlign:"center"}}>
               
               <FlightTakeoffIcon sx={{color:"162e40", fontSize:"68px"}} />
               
                <Box sx={{ paddingTop:"16px", textAlign:"center"}}>
                <Typography variant='h9'>Visa Types</Typography>
                <Typography variant='h6'>Buisness Visas</Typography>
                <Typography variant="paragraph">A visa is a conditional permission provided by a region to a foreigner to enter, stay in, or leave that country.</Typography>
                </Box>
            
               
             
            </Grid>
            </Grid>
          </CardContent>
        </Card>
    </div>

  
  
</OwlCarousel>
</Grid>
</Grid>
</Container>
  {/****************************************** Another Section ****************************************************/}
  <div style={{  backgroundImage: `url("https://visarzo.smartdemowp.com/wp-content/uploads/2020/07/pattern-3.png")`, 
      height:"100%", backgroundColor:"lightgray"}}>
          <Container sx={ {textAlign:'left'} }>
   <Grid container>
    <Grid item xs={6} sm={6} md={6} lg={6}></Grid>
   </Grid>
   </Container>
     </div>
          {/****************************************** Another Section ****************************************************/}
          <div style={{  backgroundImage: `url("https://visarzo.smartdemowp.com/wp-content/uploads/2020/07/pattern-3.png")`, 
      height:"100%", backgroundColor:"lightgray"}}>
        <Container>
      <Grid container sx={{padding:"76px"}}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant='h2'>Why Choose Us</Typography>
          <br/>
          <Typography variant='h4'>Countless Benefits & Easy Pocessing</Typography>
          <br/>
          <Typography variant='paragraph'>You choose visarzo because immigration rules and dynamic, Complicated to apply, and its difficult to deal with the migration department and you need to increase the success rate visarzo will help you to get that easily.</Typography>
          <br/>
          <Grid container spacing={2} my={2}>
            <Grid item xs={2} sm={2} md={1} lg={1}>
              <Box sx={{backgroundColor:"white", padding:"8px", alignItems:"center" }}>
              <AirplanemodeActiveIcon sx={{fontSize:"38px",   }}/>
              </Box>
            </Grid>
            <Grid item xs={10} sm={10} md={11} lg={11}>
              <Typography variant='h5'>Legal Immigration Success</Typography>
              <Typography variant='paragraph'>Since 2000 visarzo legal immigration success rate is 97 percent. So you don’t have no need to worry about that.</Typography>
            </Grid>
          </Grid> 
          <Grid container spacing={2} my={2}>
            <Grid item xs={2} sm={2} md={1} lg={1}>
              <Box sx={{backgroundColor:"white", padding:"10px"}}>
              <NoteAltIcon sx={{fontSize:'38px', }}/>
              </Box>
            </Grid>
            <Grid item xs={10} sm={10} md={11} lg={11}>
              <Typography variant='h5'>Required Documents Support</Typography>
              <Typography variant='paragraph'>Sometimes it is difficult for the student or people which document is required when. Visarzo will help you to manage that.</Typography>
            </Grid>
          </Grid> 
        </Grid>
      
      </Grid>
      </Container>
     </div>
       {/****************************************** Another Section ****************************************************/}
       <div style={{  backgroundImage: `url("https://visarzo.smartdemowp.com/wp-content/uploads/2020/07/pattern-2.png")`, 
      height:"100%", backgroundColor:"darkBlue"}}>
        <Container>
        <Grid container sx={{color:"white", padding:"44px"}}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant='paragraph'>HOW WE HELP CLIENTS</Typography>
          <Typography variant='h3'>Get The Immigration</Typography>
          <Typography variant='h3'>Training You Deserve</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} sx={{alignItems:"center"}}>
            <Typography variant='paragraph'>We provide a skilled staff to help you get the most out of your immigration. Our qualified and dependable Immigration Consultants can assist you in obtaining a favorable result in your case.</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3} paddingX="44px">
        <Grid item xs={12} sm={12} md={3} lg={3}>
       
        <div className={classes.heroImage} style={{  backgroundImage: `url("https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/training-1.jpg")`,  height:"200px",}} >
  <div className={classes.heroText2}>
    <Typography variant='h6'>Ielts</Typography>
  </div>
</div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
          <div className={classes.heroImage} style={{  backgroundImage: `url("https://visarzo.smartdemowp.com/wp-content/uploads/2020/07/training-3.jpg")`,  height:"200px",}} >
  <div className={classes.heroText2}>
    <Typography variant='h6'>ToEFL</Typography>
  </div>
</div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
          <div className={classes.heroImage} style={{  backgroundImage: `url("https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/training-4.jpg")`,  height:"200px",}} >
  <div className={classes.heroText2}>
    <Typography variant='h6'>PTE Coaching</Typography>
  </div>
</div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
       
       <div className={classes.heroImage} style={{  backgroundImage: `url("https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/training-1.jpg")`,  height:"200px",}} >
 <div className={classes.heroText2}>
   <Typography variant='h6'>Citizenship Test</Typography>
 </div>
</div>
         </Grid>
        </Grid>
        </Container>
        </div>
      {/****************************************** Another Card Section ****************************************************/}
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{textAlign:"center", padding:"26px"}}>
          <Typography className={classes.countriesTypo}>COUNTRIES WE OFFER SUPPORT</Typography>
          <Typography className={classes.countriesHead}>Immigration & Visa Services</Typography>
          <Typography  className={classes.countriesHead}>Following Countries</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} padding="26px">
        <Grid item xs={12} sm={12} md={4} lg={4}>
       
        <div className={classes.heroImage} style={{  backgroundImage: `url("https://visarzo.smartdemowp.com/wp-content/uploads/2020/07/immigration-1.jpg")`,  height:"250px",}} >
  <div className={classes.heroText}>
    <Typography variant='h4'>United States</Typography>
  </div>
</div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className={classes.heroImage} style={{  backgroundImage: `url("https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/immigration-2.jpg")`,  height:"250px",}} >
  <div className={classes.heroText}>
    <Typography variant='h4'>Canada</Typography>
  </div>
</div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className={classes.heroImage} style={{  backgroundImage: `url("https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/immigration-3.jpg")`,  height:"250px",}} >
  <div className={classes.heroText}>
    <Typography variant='h4'>Australia</Typography>
  </div>
</div>
          </Grid>
        </Grid>
        <Grid container spacing={3} padding="26px">
        <Grid item xs={12} sm={12} md={4} lg={4}>
       
        <div className={classes.heroImage} style={{  backgroundImage: `url("https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/immigration-4.jpg")`,  height:"250px",}} >
  <div className={classes.heroText}>
    <Typography variant='h4'>NewZealand</Typography>
  </div>
</div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className={classes.heroImage} style={{  backgroundImage: `url("https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/immigration-5.jpg")`,  height:"250px",}} >
  <div className={classes.heroText}>
    <Typography variant='h4'>Europe</Typography>
  </div>
</div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className={classes.heroImage} style={{backgroundColor:"linear-gradient( linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)))",  backgroundImage: `url("https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/immigration-6.jpg")`,  height:"250px",}} >
  <div className={classes.heroText}>
    <Typography variant='h4'>United Kingdom</Typography>
  </div>
</div>
          </Grid>
        </Grid>
         {/****************************************** Carousel ****************************************************/}
         <Container>
        <Grid container sx={{padding:"24px"}}>
          <Grid xs={12} sm={12} md={12} lg={12} sx={{textAlign:"center", marginY:"12px"}}>
          <Typography className={classes.countriesTypo}>CLIENTS TESTIMONIALS</Typography>

          <Typography className={classes.countriesHead}>What Customers</Typography>
          <Typography className={classes.countriesHead}>Saying About Visarzo</Typography>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={12}>
         <OwlCarousel className='owl-theme' loop margin={40} autoplay={true} nav>
    <div class='item'>
        <Card sx={{border:"1px solid black "}}>
          <CardContent>
            <Grid container>
              <Grid item xs={12} sm={6} md={5} lg={5} sx={{alignItems:"center"}}>
                <Box sx={{width:"80px", height:"40px", padding:"8px", marginY:"8px"}}>
                <img src='https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/testimonial-2.png' alt="avaatar" />
                </Box>
                <Box sx={{ paddingTop:"16px"}}>
                <Typography variant='h6'>James Thomas</Typography>
                <Typography variant='h7'>Califoria, USA</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={7} lg={7}>
                <Typography className={classes.ratingText}>Green Card Approved</Typography>
                <Typography variant='h8'>I'd want to express my gratitude to visarzo and the entire staff, particularly Mr. James Thomas, for assisting me in obtaining my student visa for London University. She helped me to find University.</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
    </div>
    <div class='item'>
    <Card sx={{border:"1px solid black "}}>
          <CardContent>
            <Grid container>
              <Grid item xs={12} sm={6} md={5} lg={5} sx={{alignItems:"center"}}>
                <Box sx={{width:"80px", height:"40px", padding:"8px", marginY:"8px"}}>
                <img src='https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/testimonial-2.png' alt="avaatar" />
                </Box>
                <Box sx={{ paddingTop:"16px"}}>
                <Typography variant='h6'>James Thomas</Typography>
                <Typography variant='h7'>Califoria, USA</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={7} lg={7}>
                <Typography className={classes.ratingText}>Green Card Approved</Typography>
                <Typography variant='h8'>I'd want to express my gratitude to visarzo and the entire staff, particularly Mr. James Thomas, for assisting me in obtaining my student visa for London University. She helped me to find University.</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
    </div>
    <div class='item'>
    <Card sx={{border:"1px solid black "}}>
          <CardContent>
            <Grid container>
              <Grid item xs={12} sm={6} md={5} lg={5} sx={{alignItems:"center"}}>
                <Box sx={{width:"80px", height:"40px", padding:"8px", marginY:"8px"}}>
                <img src='https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/testimonial-2.png' alt="avaatar" />
                </Box>
                <Box sx={{ paddingTop:"16px"}}>
                <Typography variant='h6'>James Thomas</Typography>
                <Typography variant='h7'>Califoria, USA</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={7} lg={7}>
                <Typography className={classes.ratingText}>Green Card Approved</Typography>
                <Typography variant='h8'>I'd want to express my gratitude to visarzo and the entire staff, particularly Mr. James Thomas, for assisting me in obtaining my student visa for London University. She helped me to find University.</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
    </div>
    <div class='item'>
    <Card sx={{border:"1px solid black "}}>
          <CardContent>
            <Grid container>
              <Grid item xs={12} sm={6} md={5} lg={5} sx={{alignItems:"center"}}>
                <Box sx={{width:"80px", height:"40px", padding:"8px", marginY:"8px"}}>
                <img src='https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/testimonial-2.png' alt="avaatar" />
                </Box>
                <Box sx={{ paddingTop:"16px"}}>
                <Typography variant='h6'>James Thomas</Typography>
                <Typography variant='h7'>Califoria, USA</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={7} lg={7}>
                <Typography className={classes.ratingText}>Green Card Approved</Typography>
                <Typography variant='h8'>I'd want to express my gratitude to visarzo and the entire staff, particularly Mr. James Thomas, for assisting me in obtaining my student visa for London University. She helped me to find University.</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
    </div>
    <div class='item'>
    <Card sx={{border:"1px solid black "}}>
          <CardContent>
            <Grid container>
              <Grid item xs={12} sm={6} md={5} lg={5} sx={{alignItems:"center"}}>
                <Box sx={{width:"80px", height:"40px", padding:"8px", marginY:"8px"}}>
                <img src='https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/testimonial-2.png' alt="avaatar" />
                </Box>
                <Box sx={{ paddingTop:"16px"}}>
                <Typography variant='h6'>James Thomas</Typography>
                <Typography variant='h7'>Califoria, USA</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={7} lg={7}>
                <Typography className={classes.ratingText}>Green Card Approved</Typography>
                <Typography variant='h8'>I'd want to express my gratitude to visarzo and the entire staff, particularly Mr. James Thomas, for assisting me in obtaining my student visa for London University. She helped me to find University.</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
    </div>
    <div class='item'>
    <Card sx={{border:"1px solid black "}}>
          <CardContent>
            <Grid container>
              <Grid item xs={12} sm={6} md={5} lg={5} sx={{alignItems:"center"}}>
                <Box sx={{width:"80px", height:"40px", padding:"8px", marginY:"8px"}}>
                <img src='https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/testimonial-2.png' alt="avaatar" />
                </Box>
                <Box sx={{ paddingTop:"16px"}}>
                <Typography variant='h6'>James Thomas</Typography>
                <Typography variant='h7'>Califoria, USA</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={7} lg={7}>
                <Typography className={classes.ratingText}>Green Card Approved</Typography>
                <Typography variant='h8'>I'd want to express my gratitude to visarzo and the entire staff, particularly Mr. James Thomas, for assisting me in obtaining my student visa for London University. She helped me to find University.</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
    </div>
  
</OwlCarousel>
</Grid>
</Grid>
</Container>
    </>
    
  )
}

export default PageSection1