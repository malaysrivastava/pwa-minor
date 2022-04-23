import React, { useEffect } from "react";
import axios from "axios";
import MyPView from "./mypro-view"
import { product_in } from "../../redux/actions";
import { useDispatch,useSelector } from "react-redux";

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
        dispatch(product_in(res.data))
      })
      .catch((error) => {
        console.error(error)
      })  

    
  }

  useEffect(()=>{
      loadData();
  },[1])

  const check = useSelector(state=>state.myPro)
  
  if(check && check.length > 0){
    return(
        <MyPView {...{}}/>
    )
    } else{
        return(
            <>No Products found</>
        )
    }
}

export default MyPro;