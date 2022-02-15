import React from "react";
import { Container, Grid } from '@material-ui/core'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const View = () => {
    const gridStyle = {
        padding: 2,
        height: '20vh',
        width: 1860,
        margin: '2px auto',
        backgroundColor: ''
    }

    return (
        <div className="home">

            {/* <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p> */}

<p>Developers</p>
            <Grid container style={{background:'whitesmoke'}} spacing={1}  >
               
            <Grid item xs={12} md={3}>

</Grid>
                <Grid  item xs={12} md={3} style={gridStyle} >
                    <Card sx={{  display: 'flex',justifyContent:'space-between' }}>
                    <CardMedia
                            component="img"
                            sx={{ width: 151, height:155}}
                            image="../Amazone.jpg"
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    Malay Srivastava
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Mern Stack Developer
                                </Typography>
                                
                                <Box style={{paddingTop:'10'}}>
                                <Button  variant="contained">Connect</Button>
                                </Box>
                              
                                
                            </CardContent>
                           
                        </Box>
                        
                    </Card>
                </Grid>
                {/* <Grid item xs={12} md={6}>

</Grid> */}
                <Grid item xs={12} md={3} style={gridStyle} >
                    <Card sx={{ display: 'flex',justifyContent:'space-between' }}>
                    <CardMedia
                            component="img"
                            sx={{ width: 151, height:155}}
                            image="../Amazone.jpg"
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5" >
                                    Mohit Mayank
                                </Typography>
                                <Typography variant="subtitle1" 
                                 color="text.secondary" component="div">
                                    Mern Stack Developer
                                </Typography>
                                <Box style={{paddingTop:'10'}}>
                                <Button  variant="contained">Connect</Button>
                                </Box>
                                
                             
                            </CardContent>


                        </Box>
                       
                    </Card>
                </Grid>
      
                <Grid item xs={12} md={3}>

</Grid>

            </Grid>



        </div >
    )
}

export default View