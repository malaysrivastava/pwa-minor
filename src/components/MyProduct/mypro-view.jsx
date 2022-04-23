import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import wait from 'wait';
 
const MyPView=()=>{

    const pro = useSelector(state => state.myPro); 
    
    const [show,setShow] = useState(false);

     
     useEffect(async()=>{
         setShow(false)
         await wait(1000)
         setShow(true)
     },[])

    if(show && pro){
       return (
        <div className="users">
         {pro.map((data,index) => (
          <div key={index} className="user">
              <h2>{data.title}</h2>
              <h2>{data.price}</h2>
          </div>
          ))}
    </div>
      );
} else{
    return (<>loading....</>);
} 
};

export default MyPView;