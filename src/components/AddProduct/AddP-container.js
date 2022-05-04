import React,{useEffect, useState} from "react";
import axios from 'axios'
import AddPView from "./AddP-view"
import {storage} from '../firebase'
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
import { useDispatch, useSelector } from "react-redux";
import { link_in } from "../../redux/actions";
import wait from 'wait'

const AddP=()=>{

       const Category = [
                    'Stationary',
                    'Clothing',
                    'General needs',
                    'Beverages',
                    'Food',
                    'Gadgets',
                    'Books',
                    'Others'
                ]
              //Redux to get contents
              const user_id = JSON.parse(localStorage.getItem('User'))._id
              const user_email = JSON.parse(localStorage.getItem('User')).email
              const user_name = JSON.parse(localStorage.getItem('User')).name
              const token = localStorage.getItem("Token")
             
              const [formdata, setFormData] = useState({
                  title: '',
                  desc: '',
                  img:'',
                  categories:'',
                  price:0,
                  address:'',
                  phone:'',
                  userID: user_id,
                  userMail:user_email,
                  userName:user_name,
                  text: 'Add'
                })
              
                const [image,setImage] = useState(null)

                const [imagePreview, setImagePreview] = useState("");
      
                const {title,desc,img,categories,price,address,phone,userID,userMail,userName} = formdata
      
                const handleChange = name => e =>{
                  setFormData({...formdata,[name]:e.target.value})
               }

               //const dispath = useDispatch();

               const setUrl= async(path)=>{
                const Imageref = ref(storage,path)
                await getDownloadURL(Imageref).then((x)=>{
                    //dispath(link_in(x))
                    setFormData({...formdata,img:x})
                })
            }

               const setImageUpload =(e)=>{
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
                  setFormData({...formdata, text:'Adding..'})
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
                  if (title && desc && price && categories && img.length > 0 && img) {
                  
                    axios({
                        method:"POST",
                        url:"http://localhost:8000/api/product/addP",
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
                        setFormData({
                            ...formdata,
                            title: '',
                            desc: '',
                            img:'',
                            cateories:'',
                            price:0,
                            phone:'',
                            address:'',
                            text:'Added'
                          
                        })
                        setImagePreview("")
                        console.log(res)
                    })
                    .catch((error) => {
                        setFormData({
                            ...formdata,
                            text: 'Add'
                          });
                          alert("Error in uploding image, try again")
                          console.log(error);
    
                    })
                  } else {
                      alert('Add again')
                  }
                }
      
                
    return(
        <AddPView {...{Category,handleChange,setImageUpload,imagePreview,handleSubmit,uploadImage,formdata}}/>
    )
}

export default AddP;