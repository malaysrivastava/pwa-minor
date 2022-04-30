import React, { useEffect,useState } from "react";
import EditView from './edit-view'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useDispatch,useSelector} from "react-redux";
import { product_in } from "../../redux/actions";
import wait from 'wait'

const EditP=()=>{

    const token = localStorage.getItem("Token")
    const dispatch = useDispatch();

    
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
 
    useEffect(async()=>{
        loadData(id)
        setShow(false)
        await wait(1000)
        setShow(true)
    },[])

    if(show && pro){
    return(
        <>
            <EditView {...{Category,pro}}/>
        </>
    )
    } else {
        return(
            <>Loading....</>
        )
    }
}

export default EditP;