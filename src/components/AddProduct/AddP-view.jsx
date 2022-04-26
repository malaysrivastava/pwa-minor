import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { FormGroup } from '@material-ui/core';
import Button from '@mui/material/Button';
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core"
import Autocomplete from '@mui/material/Autocomplete';


const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
]


const AddPView = () => {

  const [imagePreview, setImagePreview] = useState("");
  const paperStyle = {
    padding: 2,
    height: '88vh',
    width: 370,
    margin: '2px auto',
   
  }
  const fileHandle = e => {
    const reader = new FileReader();           // babel javascript class
    reader.onloadend = () => {
      setImagePreview(reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  return (
   
    <Grid  container spacing={2}  >
        <Grid item  md={2}>

        </Grid>

        <Grid  className="style_grid"item  md={5}>
          <img className="grid_img" src="../Add Product.webp"/>
      </Grid>
    <Grid item xs={12} md={3}>
      <Paper elevation={8}  style={paperStyle}>
        <Grid align="center">
          <div className="text">
            <p>Add Product</p>
          </div>
        </Grid>
        <FormGroup className="form" noValidate autoComplete="on">

          {/*  
  <InputLabel id="demo-multiple-name-label">Name</InputLabel> */}
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 250 }}
            renderInput={(params) => <TextField {...params} label="Category" />}
          />
          <TextField
            label="Title"
            // className={classes.textField}
            name='title'
            style={{ width: 250 }}
          />


          <TextField
            label="Price"
            type="number"
            // className={classes.textField}
            name='price'
            style={{ width: 250 }}
          />
          <TextField
            id="filled-multiline-static"
            label="Description"
            multiline
            rows={3}
            variant="filled"
            name='desc'
            style={{ width: 250 }}
          />
          <TextField
            label="Hostel Address"
           
            // className={classes.textField}
            name='add'
            style={{ width: 250 }}
          />
       
           
          
          <div className="imagePreview">
            
            {imagePreview ? <img src={imagePreview} /> : ''}
           </div>
           <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={fileHandle}
        id="contained-button-file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span" style={{
          marginTop:'1rem'
        }}>
          Upload Product Image
        </Button>
      </label>

          <Button
    style={{
        borderRadius: 35,
        backgroundColor: "tomato",
        padding: "17px 36px",
        marginTop:'6rem',
        fontSize: "15px"
    }}
    variant="contained"
    >Post
</Button>
        </FormGroup>
      </Paper>

    </Grid> 
    <Grid item md={2}>
      </Grid>
  
    </Grid>


  );
}

export default AddPView;