import React, { useEffect } from "react";
import EditView from './edit-view'
import { useHistory,useParams } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from "react-redux";
import { product_in } from "../../redux/actions";

const EditP=()=>{

    const token = localStorage.getItem("Token")
    const dispatch = useDispatch();

    let history = useHistory()
    
    const id = "62678bb78e082bbaba36f692"

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

    useEffect(()=>{
      loadData(id)
    },[id])

    return(
        <>
            <EditView {...{}}/>
        </>
    )
}

export default EditP;