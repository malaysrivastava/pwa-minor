import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';


const Proview = () => {
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
    textAlign:'left',
    color:'grey'
  }
});

const classes = useStyles();
  return (
      
    <div className="dev_box2">
    <div className="dev_name">Products</div>


    <Grid container spacing={1}  >
    
        <Grid item xs={12} md={3}  >

        <Card key={1} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          // image={../Amazone.}
          title='Bucket'
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            'Bucket'
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="cardaction">
        <h4>₹{24}</h4>
        <h5>H5</h5>
        
      </CardActions>
    </Card>
        </Grid>
    
      
        <Grid item xs={12} md={3}  >

<Card key={1} className={classes.root}>
<CardActionArea>
<CardMedia
  className={classes.media}
  // image={../Amazone.}
  title='Bucket'
/>
<CardContent className={classes.content}>
  <Typography gutterBottom variant="h5" component="h2">
    'Bucket'
  </Typography>
</CardContent>
</CardActionArea>
<CardActions className="cardaction">
<h4>₹{24}</h4>
<h5>H5</h5>

</CardActions>
</Card>
</Grid>
<Grid item xs={12} md={3}  >

        <Card key={1} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          // image={../Amazone.}
          title='Bucket'
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            'Bucket'
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="cardaction">
        <h4>₹{24}</h4>
        <h5>H5</h5>
        
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} md={3}  >

        <Card key={1} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          // image={../Amazone.}
          title='Bucket'
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            'Bucket'
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="cardaction">
        <h4>₹{24}</h4>
        <h5>H5</h5>
        
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} md={3}  >

        <Card key={1} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          // image={../Amazone.}
          title='Bucket'
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            'Bucket'
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="cardaction">
        <h4>₹{24}</h4>
        <h5>H5</h5>
        
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} md={3}  >

        <Card key={1} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          // image={../Amazone.}
          title='Bucket'
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            'Bucket'
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="cardaction">
        <h4>₹{24}</h4>
        <h5>H5</h5>
        
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} md={3}  >

        <Card key={1} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          // image={../Amazone.}
          title='Bucket'
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            'Bucket'
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="cardaction">
        <h4>₹{24}</h4>
        <h5>H5</h5>
        
      </CardActions>
    </Card>
        </Grid>

        <Grid item xs={12} md={3}  >

        <Card key={1} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          // image={../Amazone.}
          title='Bucket'
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            'Bucket'
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="cardaction">
        <h4>₹{24}</h4>
        <h5>H5</h5>
        
      </CardActions>
    </Card>
        </Grid>

    </Grid>



</div >

  )
  
}

export default Proview