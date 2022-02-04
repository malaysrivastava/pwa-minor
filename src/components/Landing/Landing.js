import React from 'react';
import { Home } from '../Home'
// import '../Landing/landing.css';
import {Grid,Paper} from '@material-ui/core'
import LinearProgress from '@mui/material/LinearProgress';


const Landing = () => {
 const paperStyle={
   padding:20,
   height:'42vh',
   width:260,
   margin:'200px auto',
   backgroundColor:'white'
 }
  return (
    <>
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        
        <img src="https://www.juit.ac.in/front/images/logo.jpg" alt=""></img>
  
    
      <div className='progress'>
        <LinearProgress style={{ padding: "4px", borderRadius: "40px" }} />
      </div>
      <div className='Gsuit'>
        <Home />
      </div>
      <div className="created">
      <h5>
       ~ Created by Mohit -- Malay
      </h5>
      </div>
      
      </Paper>
      
    </Grid>
    
    
    
   

    </>
  )
};

export default Landing;