import React, { useEffect } from "react";
import axios from "axios";
import MyPView from "./mypro-view"
import { my_product } from "../../redux/actions";
import { useDispatch } from "react-redux";

const MyPro=()=>{

    
  const token = localStorage.getItem('Token');
  
  let id = JSON.parse(localStorage.getItem("User"))._id
  const dispatch = useDispatch();

  const loadData = () => {

      axios.get(`http://localhost:8000/api/product/?user_id=${id}`, {
        headers: {
          'x-auth-token': token
        }
      })
      .then((res) => {
        dispatch(my_product(res.data))
      })
      .catch((error) => {
        console.error(error)
      })  

    
  }

  useEffect(()=>{
      loadData();
  },[1])

    return(
        <MyPView {...{}}/>
    )
}

export default MyPro;