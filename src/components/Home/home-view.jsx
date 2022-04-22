import React from "react";
import { Grid } from '@material-ui/core'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slider from "react-slick";


const View = () => {
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
              

    return (
        <div className="home">
           
            <div className="items">
        <h2 className="trending_text"> Top 20 trending items..</h2>
        <Slider className="slider" {...settings}>
          <div>
            <img className="image" src='https://miro.medium.com/max/640/0*wJ1H_ArMVuZR-wwm.png'/>
            <p>
              <b>Rs 500</b>
              <b>H4-28</b>
            </p>
          </div>
          <div>
          <img className="image" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kwjbXUhtAJljpntW9136Kb53aULjExh40w&usqp=CAU'/>
          <p>
              <b>Rs 150</b>
              <b>H15-10</b>
            </p>
          </div>
          <div>
          <img className="image" src='https://apollo-singapore.akamaized.net/v1/files/9cwja3u6m6ai3-IN/image;s=780x0;q=60'/>
          <p>
              <b>Rs 25000</b>
              <b>H11-42A</b>
            </p>
          </div>
          <div>
          <img className="image" src='https://apollo-singapore.akamaized.net/v1/files/jssg3r1xsiph2-IN/image;s=780x0;q=60'/>
          <p>
              <b>Rs 1500</b>
              <b>H1-8</b>
            </p>
          </div>
          <div>
          <img className="image" src='https://apollo-singapore.akamaized.net/v1/files/y0gn9flb856t2-IN/image;s=780x0;q=60'/>
          <p>
              <b>Rs 500</b>
              <b>H4-28</b>
            </p>
          </div>
          <div>
          <img className="image" src='../Amazone.jpg'/>
          <p>
              <b>Rs 500</b>
              <b>H4-28</b>
            </p>
          </div>
          <div>
          <img className="image" src='../Amazone.jpg'/>
          <p>
              <b>Rs 500</b>
              <b>H4-28</b>
            </p>
          </div>
          <div>
          <img className="image" src='../Amazone.jpg'/>
          <p>
              <b>Rs 500</b>
              <b>H4-28</b>
            </p>
          </div>
        </Slider>
            </div>
        <div className="items">
        <Slider {...settings}>
          <div>
            <img className="image" src='../Amazone.jpg'/>
          </div>
          <div>
          <img className="image" src='../Amazone.jpg'/>
          </div>
          <div>
          <img className="image" src='../Amazone.jpg'/>
          </div>
          <div>
          <img className="image" src='../Amazone.jpg'/>
          </div>
          <div>
          <img className="image" src='../Amazone.jpg'/>
          </div>
          <div>
          <img className="image" src='../Amazone.jpg'/>
          </div>
          <div>
          <img className="image" src='../Amazone.jpg'/>
          </div>
          <div>
          <img className="image" src='../Amazone.jpg'/>
          </div>
        </Slider>
      </div>
     
     
      
             


            <div className="dev_box">
                <div className="dev_name">Developer</div>


                <Grid container spacing={1}  >


                    <Grid item xs={12} md={3} style={gridStyle} >

                        <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 151, height: 155 }}
                                image="../Amazone.jpg"
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6">
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
                                image="../Amazone.jpg"
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6" >
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