import React,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { product_in } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import View from './ViewImage-view';
import wait from 'wait';


const ViewImage = () => {
 
  const token = localStorage.getItem("Token")
  const dispatch = useDispatch();
  const user_id = JSON.parse(localStorage.getItem("User"))._id;
  
  const {id} = useParams()

  const loadData=(id)=>{
      axios.get(`http://localhost:8000/api/product/idby/?id=${id}`, {
          headers: {
            'x-auth-token': token
          }
        })
        .then((res) => {
          dispatch(product_in(res.data))  
        })
        .catch((error) => {
          console.error(error)
        })  
  }

  const pro = useSelector(state => state.myPro); 
  
  const [show,setShow] = useState(false);

  const addtoWish=()=>{
     
  const iiid = user_id + pro[0]._id;
  console.log(iiid)                  
      axios({
          method:"POST",
          url:"http://localhost:8000/api/product/addW",
          headers: {
              'x-auth-token': token
          },
          data:{
              title:pro[0].title,
              desc:pro[0].desc,
              price:pro[0].price,
              img:pro[0].img,
              categories:pro[0].categories,
              address:pro[0].address,
              phone:pro[0].phone,
              userID:iiid,
              userMail:pro[0].userMail,
              userName:pro[0].userName
          }
      })   
      .then((res) => {
        alert(res.data.message)
      })
      .catch((error) => {
          console.log(error);

      })
    
  }

  useEffect(async()=>{
    setShow(false);
    loadData(id);
    await wait(1000);
    setShow(true);
  },[])

  if(show && pro){
  return (
    
    <div>

    <View {...{pro,addtoWish}}/>
 
    </div>

  )
  } else{
    return<>
      loading...
    </>
  }
};

export default ViewImage;