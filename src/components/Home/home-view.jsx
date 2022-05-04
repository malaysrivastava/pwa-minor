import React from "react";
import { Link } from "react-router-dom";
import { Grid } from '@material-ui/core'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slider from "react-slick";
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';


const View = ({pro}) => {
    const gridStyle = {
        padding: 12,
        height: '20vh',
        width: 1860,
        margin: '2px auto',
        backgroundColor: ''
    }
    var settings = {
        
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


      const useStyles = makeStyles({
        root: {
          maxWidth: 285,
          margin: 5
        },
        media: {
          height: 200,
        },
        content:{
          height:40,
          textAlign:'left',
          color:'grey'
        }
      });

      const classes = useStyles();
    return (
        <div className="home">
           
            <div className="items">
        <h2 className="trending_text"> Top 20 trending items..</h2>
        <Slider className="slider" {...settings}>
        {
          pro && pro.map((data,key)=>

          <Link to={`/viewImage/${data._id}`}>
            <Card key={key} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.img}
          title={data.categories}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="cardaction">
        <h4>₹{data.price}</h4>
        {data.address &&
          <h5>Address:{data.address}</h5>
        }
        
      </CardActions>
    </Card>
    </Link>
          )
        }
        
        </Slider>
      </div>
     
     
      
             


            <div className="dev_box">
                <div className="dev_name">Developers</div>


                <Grid container spacing={1}  >


                    <Grid item xs={12} md={3} style={gridStyle} >

                        <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 151, height: 155 }}
                                image="https://media-exp1.licdn.com/dms/image/C5103AQE4EPamrmQn3g/profile-displayphoto-shrink_400_400/0/1585572598051?e=1656547200&v=beta&t=fFi2-cJmUXdd50ar-G21ZkZzFjM863t4S2pFXq0Owco"
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h7">
                                        Malay Srivastava
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Mern Stack Developer
                                    </Typography>

                                    <Box style={{ paddingTop: '30' }}>
                                        <Button variant="contained">Connect</Button>
                                    </Box>


                                </CardContent>

                            </Box>

                        </Card>
                    </Grid>


                    <Grid item xs={12} md={3} style={gridStyle} >
                        <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 151, height: 155 }}
                                image="https://media-exp1.licdn.com/dms/image/D5635AQGqo9yiF6dbOA/profile-framedphoto-shrink_400_400/0/1632499680676?e=2147483647&v=beta&t=DAyp3rtxozCiV5IYrC53Olsoqwls7q4FvfTFPK5SQ4U"
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h7" >
                                        Mohit Mayank
                                    </Typography>
                                    <Typography variant="subtitle1"
                                        color="text.secondary" component="div">
                                        Mern Stack Developer
                                    </Typography>
                                    <Box style={{ paddingTop: '10' }}>
                                        <Button variant="contained">Connect</Button>
                                    </Box>


                                </CardContent>


                            </Box>

                        </Card>



                    </Grid>
                </Grid>



            </div >
        </div>

    )
}

export default View