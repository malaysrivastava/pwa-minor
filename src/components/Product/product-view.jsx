import React from "react";
import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';


const Proview = ({pro}) => {
  const gridStyle = {
    padding: 12,
    height: '20vh',
    width: 1860,
    margin: '2px auto',
    backgroundColor: ''
}
const useStyles = makeStyles({
  root: {
    maxWidth: 285,
    marginLeft: 60
  },
  media: {
    height: 200,
  },
  content:{
    height:40,
    textAlign:'center',
    color:'grey'
  }
});

const classes = useStyles();
  return (
      
    <div className="dev_box2">
    <div className="dev_name">Products</div>


    <Grid container spacing={1}  >
    {
      pro && pro.map((data,key)=>
    
        <Grid item key={key} xs={12} md={3}  >
        <Link to={`/viewImage/${data._id}`}>
        <Card key={1} className={classes.root}>
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
          <h5>{data.address}</h5>
        }
        
      </CardActions>
    </Card>
    </Link>
        </Grid>
      )}
    </Grid>



</div >

  )
  
}

export default Proview