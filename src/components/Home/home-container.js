import React, { useEffect, useState } from "react";
import { useHistory,useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import View from "./home-view";
import axios from "axios";
import { product_in } from "../../redux/actions";
import { useDispatch } from "react-redux";
import wait from 'wait'

const Home =()=>{

  const token = localStorage.getItem('Token');
  
  const dispatch = useDispatch();

  const[load,setLoad] = useState(false)
  
  let history = useHistory();
  let location = useLocation();

  const loadData = () => {

    axios.get(`https://juit-olx-app.herokuapp.com/api/product/?new=4`, {
      headers: {
        'x-auth-token': token
      }
    })
    .then((res) => {
      dispatch(product_in(res.data))
    })
    .catch((error) => {
      console.error(error)
    })  

  
}


const pro = useSelector(state=>state.myPro)



useEffect(async()=>{
  history.push(location.pathname);
  setLoad(false);
  loadData();
  await wait(1000);
  setLoad(true)
},[])

if(load && pro){
     return(
       <div>
           <View {...{pro}}/>
       </div>
     );
} else {
  return <>
    loading products...
  </>
}
}

export default Home;