import React from 'react';
import {Grid} from '@material-ui/core'

const View = () => {
    const gridStyle={
        padding:0,
        height:'43vh',
        width:1860,
        // margin:'1px auto',
        backgroundColor:''
      }

    return (
        <div>
 
     <Grid container>
     <Grid item xs={12} style={gridStyle} >
     {/* <Paper elevation={10} style={paperStyle}> */}

        
        <img style={{'opacity':'80%',width:'100%',margin:'0',padding:'0'}} src='../Amazone.jpg' alt=""></img>
        {/* </Paper> */}
        </Grid>
     </Grid>
        </div>
   
    )
}
export default View;
