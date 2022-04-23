import React,{useState} from "react";
import axios from 'axios'
import AddPView from "./AddP-view"

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
                  img:'fdfd',
                  categories:'',
                  price:0,
                  address:'H1 R4',
                  userID: user_id,
                  userMail:user_email,
                  userName:user_name,
                  text: 'Add'
                })
      
                const {title,desc,img,categories,price,address,userID,userMail,userName} = formdata
      
                const handleChange = name => e =>{
                  setFormData({...formdata,[name]:e.target.value})
               }
               
               const handleSubmit = e => {
                  e.preventDefault()
                  if (title && desc && price && categories && img) {
                    setFormData({...formdata, text:'Adding..'})
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
                            address:'',
                            text:'Added'
                          
                        })
                        console.log(res)
                    })
                    .catch((error) => {
                        setFormData({
                            ...formdata,
                            text: 'Add'
                          });
                          console.log(error);
    
                    })
                  } else {
                      console.log('Nhi ho pa raha',title,desc,price,img,categories)
                  }
                }
      

    return(
        <AddPView {...{Category,handleChange,handleSubmit,formdata}}/>
    )
}

export default AddP;