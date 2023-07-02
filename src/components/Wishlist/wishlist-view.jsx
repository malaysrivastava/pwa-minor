import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import wait from 'wait';
 
const WishView=({submit})=>{

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      });

    const pro = useSelector(state => state.myPro); 
    
    const [show,setShow] = useState(false);

     
     useEffect(async()=>{
         setShow(false)
         await wait(1000)
         setShow(true)
     },[])

    if(show && pro){
       return (<>
         {pro?.map((data,index) => (
            <Paper
      key={index}      
      sx={{
        p: 2,
        margin: 'auto',
        marginTop:2.5,
        marginBottom:2.5,
        maxWidth: 1000,
        flexGrow: 1,
        backgroundColor: '#A4A9AC'
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={data.img} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {data.title} ({data.categories})
              </Typography>
              <Typography variant="body2" gutterBottom>
                {data.desc}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.address} {data.phone && <small>Phone: {data.phone}</small>}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
              <Button
                style={{
                    'border-none':'none',
                    'color':'red'
                }}
                onClick={()=>submit(data._id)}
                >Remove
            </Button>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
            ₹{data.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
          ))}
          </>
      );
} else{
    return (<>loading....</>);
} 
};

export default WishView;