import React from 'react';
import axios from "axios";
import Lview from './Landing-view';


const Landing = () => {
  const responseSuccessGoogle = async (response) => {
       
    axios({
        method:"POST",
        url:"http://localhost:8000/api/googlelogin",
        data:{tokenId:response.tokenId}
    })
    .then(response=>{
        console.log("Google login success",response)
    })
  }
const responseErrorGoogle = (response)=>{
         console.log('Google login failed')
} 

  return (
    
    <div>

    <Lview {...{responseSuccessGoogle,responseErrorGoogle}}/>
 
    </div>

 
  )
};

export default Landing;