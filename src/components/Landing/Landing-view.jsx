import React from 'react';
// import { Home } from '../Home'
import { GoogleLogin } from 'react-google-login';
import {Grid,Paper} from '@material-ui/core'
import LinearProgress from '@mui/material/LinearProgress';


const Lview = ({responseSuccessGoogle,responseErrorGoogle}) => {
 const paperStyle={
   padding:20,
   height:'42vh',
   width:260,
   margin:'200px auto',
   backgroundColor:'white'
 }

  return (
    
    <div className='googLog'>
   
    <Grid>
      <Paper elevation={10} style={paperStyle}>

     <div className='jmg'>
        <img src="https://www.juit.ac.in/front/images/logo.jpg" alt="" />
     </div>

      <div className='progress'>
        <LinearProgress style={{ padding: "4px", borderRadius: "40px" }} />
      </div>
      {/* <div className='Gsuit'>
        <GoogleLogin
            clientId="233905196668-6010oh4hlatb7bna850l7tu8tc4hj2v4.apps.googleusercontent.com"
            buttonText="Login with GSUITE"
            onSuccess={responseSuccessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={'single_host_origin'}
        />
      </div> */}
      
      </Paper>
      
    </Grid>
    
    
 
    </div>

 
  )
};

export default Lview;