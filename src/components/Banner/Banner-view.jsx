import React,{useState,useEffect} from 'react';
import {Grid} from '@material-ui/core'

const View = () => {
    const gridStyle={
        padding:12,
        height:'43vh',
        width:1860,
        // margin:'1px auto',
        backgroundColor:''
      }

      const [show,setShow] = useState(true);
      var excp = window.location.pathname;
    
      useEffect(()=>{
      console.log(excp)
        if(excp=='/login'){
          setShow(false);
        }else{
          setShow(true);
        }
      },[2])

      if(show){
    return (
        <div>
 
 <Grid container>
     <Grid item xs={12} style={gridStyle} >
     {/* <Paper elevation={10} style={paperStyle}> */}

        
        <img src="../Amazone.jpg" alt=""></img>
        {/* </Paper> */}
        </Grid>
     </Grid>
      
  
    
        </div>

        
       
    )
} else {
    return (<></>)
}
}
export default View;
