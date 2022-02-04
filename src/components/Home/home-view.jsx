import React from "react";
import { GoogleLogin } from 'react-google-login';
import { increment,decrement } from "../../redux/actions";

const View=({keyword,responseSuccessGoogle,responseErrorGoogle,counter,isLogged,dispatch})=>{


   return(
       <div>
       {/* <h1>{keyword}</h1>
       <h2>Counter {counter}</h2>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
       {isLogged && <h3>Hello Logged in</h3> } */}
       <GoogleLogin
            clientId="233905196668-6010oh4hlatb7bna850l7tu8tc4hj2v4.apps.googleusercontent.com"
            buttonText="Login with GSUITE"
            onSuccess={responseSuccessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={'single_host_origin'}
        />

       </div>
   )
}

export default View