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
          maxWidth: 270,
          margin: 2,
          marginLeft:40
        },
        media: {
          height: 170,
        },
        content:{
          height:40,
          textAlign:'center',
          color:'grey'
        }
      });

      const classes = useStyles();
    return (
        <div className="home">
           
            <div className="items">
        <h2 className="trending_text"> Trending items..</h2>
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
        <h5>₹{data.price}</h5>
        {data.address &&
          <h5>{data.address}</h5>
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
                                image="https://media-exp1.licdn.com/dms/image/C4D03AQEo1lWRd69wQQ/profile-displayphoto-shrink_400_400/0/1656745733062?e=1664409600&v=beta&t=Hz5v9bFjbdav6pI2zYOthPa_mAafr4SaGEvTZrt7ZTc"
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'row','justify-content':'center','align-items':'center'  }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h7">
                                        Malay Srivastava
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Mern Stack Developer
                                    </Typography>



                                </CardContent>

                            </Box>

                        </Card>
                    </Grid>


                    <Grid item xs={12} md={3} style={gridStyle} >
                        <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 151, height: 155 }}
                                image="https://media-exp1.licdn.com/dms/image/C5603AQHCzsl9I8lnhw/profile-displayphoto-shrink_400_400/0/1604086941361?e=1664409600&v=beta&t=celjVNVESq_jaWAQB-2zi7OLzYAPGCZ6pYHLjIFaCYs"
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'row','justify-content':'center','align-items':'center' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h7" >
                                        Mohit Mayank
                                    </Typography>
                                    <Typography variant="subtitle1"
                                        color="text.secondary" component="div">
                                        Mern Stack Developer
                                    </Typography>


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