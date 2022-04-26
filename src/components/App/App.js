import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import React from "react";
import {Home} from '../Home'
import { Landing } from "../Landing";
import { Navbar } from "../Navbar";
import {Footer} from "../Footer"
import {Banner} from "../Banner"
import { Product } from "../Product";
import { MyPro } from "../MyProduct";
import PrivateRoute from "../PrivateRoute";
import {AddProduct} from '../AddProduct'
import { ViewImage } from "../ViewImage";
import { EditP } from "../EditProduct";
import {useState,useEffect} from "react";


const App = () => {
  const[Isloginpage, setIsloginpage] = useState(false);
  const[url, setUrl] = useState('');
 


useEffect(()=>{
  const currentUrl = window.location.href;
  setUrl(currentUrl);
  console.log(url)
  console.log(currentUrl)
  if(currentUrl == `http://localhost:3000/login`){
    setIsloginpage(true);
    console.log(Isloginpage)
  }
  else{
    setIsloginpage(false);
    console.log("not current")
    
  }

  console.log("reached")
},[url])

  return (
      <Router>
     {Isloginpage? NaN:<Navbar/>} 
     {Isloginpage? NaN:<Banner/>} 
      
       <Switch>
      <Route exact path="/login">
        <Landing/>
      </Route>
      <PrivateRoute exact path="/">
        <Home/>
      </PrivateRoute>
      <PrivateRoute exact path="/mypro">
        <MyPro/>
      </PrivateRoute>
      <PrivateRoute exact path="/product">
        <Product/>
      </PrivateRoute>
      <PrivateRoute exact path="/viewImage">
      <ViewImage/>
      </PrivateRoute>
        <PrivateRoute exact path="/addproduct">
          <AddProduct/>
        </PrivateRoute>
        <PrivateRoute exact path="/editproduct/:id">
          <EditP/>
        </PrivateRoute>
      </Switch>
      {Isloginpage? NaN:<Footer/>} 
      </Router>

  );
}

export default App;
