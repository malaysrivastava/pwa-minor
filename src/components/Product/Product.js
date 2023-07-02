import Proview from './product-view'
import React, { useEffect,useState } from "react";
import axios from "axios";
import { product_in } from "../../redux/actions";
import { useDispatch,useSelector } from "react-redux";
import wait from 'wait';


const Product = () => {

      
  const token = localStorage.getItem('Token');
  
  const dispatch = useDispatch();

  let type = window.location.search

  const loadData = () => {

    let url;
    if(type.length > 0){
      url = `https://juitolx-malay.b4a.run/api/product/${type}`
    } else{
      url = `https://juitolx-malay.b4a.run/api/product/`
    }

    console.log(url)

      axios.get(url, {
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
   const [show,setShow] = useState(false);


  useEffect(async()=>{
     setShow(false);
      loadData();
      await wait(1000);
      setShow(true);
  },[])

  const pro = useSelector(state=>state.myPro)
  
if(show && pro){
  return (
    <>
    <Proview {...{pro}}/>
    </>
  )
} else {
  return <>
    loading..
  </>
}
}

export default Product;