import React, { useEffect, useState } from "react";
import {storage} from '../firebase'
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
import { TextField, Select, MenuItem } from "@material-ui/core";
import { useTheme } from '@mui/material/styles';
import { FormGroup } from '@material-ui/core';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core"
import axios from "axios";
import wait from "wait";

const EditView=({Category,pro})=>{

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


const paperStyle = {
  padding: 5,
  height: '85vh',
  width: 370,
  margin: '5px auto',
 
}

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

const theme = useTheme();
  
   //Redux to get contents
   const token = localStorage.getItem("Token")
   const user_id = JSON.parse(localStorage.getItem('User'))._id
   const user_email = JSON.parse(localStorage.getItem('User')).email
   const user_name = JSON.parse(localStorage.getItem('User')).name    

    const [prod,setProd] = useState({
        title:'',
        desc:'',
        img:'',
        categories:'',
        price:0,
        address:'',
        phone:'',
        userID:user_id,
        userMail:user_email,
        userName:user_name,
        text:'Edit'
    })

    const [id,setID] = useState('');

  
    const {title,desc,img,categories,price,address,phone,userID,userMail,userName,text} = prod;

    const [imagePreview, setImagePreview] = useState(pro[0].img);

    const handleChange = name => e =>{
      setProd({...prod,[name]:e.target.value})
   }

   const [image,setImage] = useState(null)

   //const dispath = useDispatch();

   const setUrl= async(path)=>{
    const Imageref = ref(storage,path)
    await getDownloadURL(Imageref).then((x)=>{
        //dispath(link_in(x))
        console.log(x)
        setProd({...prod,img:x})
    })
}

   const setImageUpload =(e)=>{
        setProd({...prod,img:''});
        const reader = new FileReader();           // babel javascript class
        reader.onloadend = () => {
        setImagePreview(reader.result);
        }
        reader.readAsDataURL(e.target.files[0]);
        setImage(e.target.files[0])
   }
 
  const uploadImage = (e)=>{
      e.preventDefault();
      if(image == null && !title && !desc && !price && !categories && !image && image.length<=0) {
        alert('Add all fields')  
        return;
      }
      setProd({...prod, text:'Editing..'})
      const imageRef = ref(storage, `image/${image.name + v4()}`)
      uploadBytes(imageRef,image).then(async (res)=>{
         setUrl(res.ref._location.path)
         await wait(2000)
         handleSubmit()
      })
}
  
  //const pro = useSelector(state => state.myLink); 

   const handleSubmit = () => {
      //e.preventDefault()
      if (title && desc && price && categories && img && img.length > 0) {
      
        axios({
            method:"PUT",
            url:`http://localhost:8000/api/product/editP/?id=${id}`,
            headers: {
                'x-auth-token': token
            },
            data:{
                title:title,
                desc:desc,
                price:price,
                img:img,
                categories:categories,
                address:address,
                phone:phone,
                userID:userID,
                userMail:userMail,
                userName:userName
            }
        })   
        .then((res) => {
            setProd({
                ...prod,
                title: '',
                desc: '',
                img:'',
                cateories:'',
                price:0,
                phone:'',
                address:'',
                text:'Edited'
              
            })
            setImagePreview("")
            console.log(res)
        })
        .catch((error) => {
            setProd({
                ...prod,
                text: 'Edit'
              });
              alert("Error in uploding image, try again")
              console.log(error);

        })
      } else {
          alert('Edit again')
      }
    }




    useEffect(()=>{
       setProd({
           title:pro[0].title,
           desc:pro[0].desc,
           categories:pro[0].categories,
           img:pro[0].img,
           price:pro[0].price,
           address:pro[0].address,
           phone:pro[0].phone
       })
       setID(pro[0]._id)
    },[pro])

        return (
         <>
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
            <p>Edit Product</p>
          </div>
        </Grid>
        <FormGroup className="form" noValidate autoComplete="off">

          <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={categories}
          className="cat-drop"
          input={<OutlinedInput label="Name" />}
            onChange={handleChange('categories')}
          MenuProps={MenuProps}
        >
          {Category.map((cat) => (
            <MenuItem
              key={cat}
              value={cat}
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
            onChange={handleChange('title')}
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
            // className={classes.textField}
            name='add'
            style={{ width: 250 }}
            onChange={handleChange('address')}
          />
       
       <TextField
            label="Phone number (optional)"
            value={phone}
            onChange={handleChange('phone')}
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
        <Button variant="contained" color="primary" component="span" style={{
          
        }}>
          Upload Product Image
        </Button>
      </label>

          <Button
    style={{
        borderRadius: 7,
        backgroundColor: "tomato",
        padding: "17px 17px",
        marginTop:'2em',
        fontSize: "15px"
    }}
    variant="contained"
    type="submit"
    onClick={uploadImage}
    >{prod.text || 'Edit'}
</Button>
        </FormGroup>
      </Paper>

    </Grid> 
    <Grid item md={2}>
      </Grid>
  
    </Grid>

         </>
       );
 
 };

export default EditView