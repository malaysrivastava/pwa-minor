import React,{useState,useEffect} from 'react';
import axios from "axios";
import Lview from './Landing-view';
import { useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken'

const Landing = () => {

  let history = useHistory()
  

  const [log,setLog] = useState(false);
  
  const token = localStorage.getItem('Token');
  
  useEffect(()=>{
      jwt.verify(token,'my-32-character-ultra-secure-and-ultra-long-secret',function(err,decode){
        if(err){
          setLog(false);
        
        } else {
          setLog(true);
          if(decode.isAdmin){
            localStorage.setItem('Rights',decode.isAdmin)
          } else {
            localStorage.setItem('Rights',false)
          }
        }
      });
    },[token,log])

  if(log){
    history.push('/')
  }

  const responseSuccessGoogle = async (response) => {
    const setData=(data)=>{
      localStorage.setItem('Token',data.data.token);
      localStorage.setItem('User',JSON.stringify(data.data.user))
    }
    
    axios({
        method:"POST",
        url:"https://juit-olx-app.herokuapp.com/api/auth/googlelogin/",
        data:{tokenId:response.tokenId}
    })
    .then(response=>{
        console.log("Google login success")
        setData(response)
        history.go('/')
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