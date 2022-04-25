import { TextField, Select, MenuItem } from "@material-ui/core";
import { useTheme } from '@mui/material/styles';
import React, { useState } from "react";
import { FormGroup } from '@material-ui/core';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core"
import {makeStyles} from "@material-ui/core"

const AddPView = ({Category,handleSubmit,handleChange,setImageUpload,formdata,imagePreview,uploadImage}) => {
 

const useStyles = makeStyles((theme) =>({
paperStyle:{
  [theme.breakpoints.up("sm")]:{
    width:'1300',
    backgroundColor:'black'
  }
}
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const classes=useStyles();
const paperStyle = {
  padding: 5,
  height: '85vh',
  width: 370,
  margin: '5px auto',
 
}

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const theme = useTheme();
  
  const {title,desc,price,img,categories,address} = formdata;

  return (
    <Grid  >
    {/* <Grid item xs={12} md={6} style={{backgroundColor:'black'}}> */}
      <Paper elevation={10}  style={paperStyle}>
        <Grid align="center">
          <div className="text">
            <p>Add Product</p>
          </div>
        </Grid>
        <FormGroup className="form" onSubmit={handleSubmit} noValidate autoComplete="off">

          <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={categories}
          className="cat-drop"
          onChange={handleChange('categories')}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {Category.map((cat) => (
            <MenuItem
              key={cat}
              value={cat}
              style={getStyles(cat, categories, theme)}
            >
              {cat}
            </MenuItem>
          ))}
        </Select>

          <TextField
            label="Title"
            // className={classes.textField}
            name='title'
            value={title}
            onChange = {handleChange('title')}
            style={{ width: 250 }}
          />


          <TextField
            label="Price"
            type="number"
            // className={classes.textField}
            name='price'
            value={price}
            onChange={handleChange('price')}
            style={{ width: 250 }}
          />
          <TextField
            id="filled-multiline-static"
            label="Description"
            multiline
            rows={3}
            variant="filled"
            name='desc'
            value={desc}
            onChange={handleChange('desc')}
            style={{ width: 250 }}
          />
          <TextField
            label="Hostel Address"
            value={address}
            onChange={handleChange('address')}
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
        onChange={setImageUpload}
        id="contained-button-file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload Product Image
        </Button>
      </label>

          <Button
    style={{
        borderRadius: 35,
        backgroundColor: "tomato",
        padding: "17px 36px",
        marginTop:'15px',
        fontSize: "15px"
    }}
    variant="contained"
    type="submit"
    //onClick={handleSubmit}
    onClick={uploadImage}
    >{formdata.text}
</Button>
        </FormGroup>
      </Paper>

    </Grid> 


  );
}

export default AddPView;