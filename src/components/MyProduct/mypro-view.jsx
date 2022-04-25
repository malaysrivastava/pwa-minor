import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import wait from 'wait';
 
const MyPView=({submit})=>{

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
             <img src={data.img} alt="" />
              <h2>{data.title}</h2>
              <h2>{data.price}</h2>
              <Button
                style={{
                    borderRadius: 35,
                    backgroundColor: "tomato",
                    padding: "17px 36px",
                    marginTop:'15px',
                    fontSize: "15px"
                }}
                variant="contained"
                type="submit"
                onClick={()=>submit(data._id)}
                >Delete Product
            </Button>
          </div>
          ))}
    </div>
      );
} else{
    return (<>loading....</>);
} 
};

export default MyPView;