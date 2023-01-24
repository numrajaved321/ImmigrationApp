import React from 'react'
import Grid from '@mui/material/Grid';
import { Container, width } from '@mui/system';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import { makeStyles } from "@mui/styles";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const useStyles = makeStyles((theme) => ({
 
    Typo:{
        fontFamily:"sans-serif",
        fontSize:"12px",
        color:"#777777",
        fontWeight:"600px"
      },
      TypoPara:{
        fontFamily:"sans-serif",
        fontSize:"19px",
        color:"black",
        fontWeight:"400px"
      },
      TypoHead:{
        fontFamily:"sans-serif",
        fontSize:"42px",
        color:"black",
        fontWeight:"700px"
      },
      TypoHead2:{
        fontFamily:"sans-serif",
        fontSize:"38px",
        color:"black",
        fontWeight:"700px"
      },

  
  }));
const Faq = () => {
    const classes = useStyles();
  return (
   <>
        <div style={{ 
      backgroundImage: `url("https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/page-title-4.jpg")`, 
    opacity:"inherit",
     height:"350px",
     
    
     
    }}>
         <Container>
     <Grid container sx={{textAlign:"bottom"}}>
        <Grid item xs={12} sm={12} md={12} lg={12} >
          <Typography>FAQ</Typography>
          <Typography>Home ----- FAQ</Typography>
        </Grid>
        </Grid>
        </Container>
    </div>
    <Container>
        <Grid container sx={{marginY:"40px", alignItems:"center"}}>
            <Grid item xs={6} sm={6} md={6} lg={6}>
            <Typography className={classes.Typo} >How We Help Clients</Typography>

                <Typography className={classes.TypoHead} >Read All Frequently</Typography>
                <Typography className={classes.TypoHead} >Asked Questions</Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
            <Typography className={classes.Para} >We provide a skilled staff to help you get the most out of your immigration. Our qualified and dependable Immigration Consultants can assist you in obtaining a favorable result in your case.</Typography>
            </Grid>
        </Grid>
        <Grid container spacing={2} sx={{marginY:"20px"}}>
            <Grid item xs={6} sm={6} md={6} lg={6}>
                 <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
             <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionSummary>
      </Accordion>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6}>
                 <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
             <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionSummary>
      </Accordion>
      </Grid>
          </Grid> 
          <Grid item xs={12} sm={12} md={12} lg={12} sx={{marginY:"10px"}}>
            <Typography className={classes.TypoHead2} > Speacial Issues and Common Forms</Typography>
            </Grid>
            <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{marginY:"10px"}}>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
                </Grid>
            </Grid>
    </Container>
   </>
  )
}

export default Faq