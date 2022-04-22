import React from 'react';
// import { Home } from '../Home'
import { GoogleLogin } from 'react-google-login';
import Box from '@mui/material/Box';
import {Grid,Paper} from '@material-ui/core'
// import LinearProgress from '@mui/material/LinearProgress';



const Lview = ({responseSuccessGoogle,responseErrorGoogle}) => {
  const [progress, setProgress] = React.useState(2);
 const paperStyle={
   padding:20,
   height:'46vh',
   width:300,
   margin:'200px auto',
   backgroundColor:'white'
 }

  return (
    
    <div className="">
   {/* <img src='https://www.juit.ac.in/front/images/banner2.jpg'/> */}
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        
        {/* <img src="https://www.juit.ac.in/front/images/logo.jpg" alt=""></img>
   */}
    
      {/* <div className='progress'>
        <LinearProgress style={{ padding: "4px", borderRadius: "40px" }} /> */}
      
      {/* <LinearProgress variant="determinate" value={progress} />
   
        

      
      </div> */}
      <div className='Gsuit'>
        {/* <Home /> */}
        <GoogleLogin
            clientId="233905196668-6010oh4hlatb7bna850l7tu8tc4hj2v4.apps.googleusercontent.com"
            buttonText="Login with GSUITE"
            onSuccess={responseSuccessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={'single_host_origin'}
        />
      </div> 
      
      </Paper>
      
    </Grid>
    
    
 
    </div>

 
  )
};

export default Lview;