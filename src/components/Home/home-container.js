import React from "react";
import View from './home-view'
import axios from "axios";
import { useSelector ,useDispatch} from "react-redux";

const Home =()=>{

    const counter = useSelector(state=>state.counter);
    const isLogged = useSelector(state=>state.isLogged);
    const dispatch = useDispatch();

    const responseSuccessGoogle = async (response) => {
       
        axios({
            method:"POST",
            url:"http://localhost:8000/api/auth/googlelogin",
            data:{tokenId:response.tokenId}
        })
        .then(response=>{
            console.log("Google login success",response)
        })
      }
    const responseErrorGoogle = (response)=>{
             console.log('Google login failed')
    }  

    const keyword = "Home hai bhai";
     return(
        <View {...{responseSuccessGoogle,responseErrorGoogle,keyword,counter,isLogged,dispatch}}/>
     );
}

export default Home;