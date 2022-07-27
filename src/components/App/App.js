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
import {Wishlist} from "../Wishlist";
import { EditP } from "../EditProduct";
import {useState,useEffect} from "react";


const App = () => {
  const[Isloginpage, setIsloginpage] = useState(false);
  const[url, setUrl] = useState('');
 


useEffect(()=>{
  const currentUrl = window.location.href;
  setUrl(currentUrl);
  if(currentUrl == `https://juitolx.netlify.app/login`){
    setIsloginpage(true);
    console.log(Isloginpage)
  }
  else{
    setIsloginpage(false);

    
  }

  
},[])

  return (
      <Router>
     {Isloginpage? null:<Navbar/>} 
     {Isloginpage? null:<Banner/>} 
      
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
      <PrivateRoute exact path="/viewImage/:id">
      <ViewImage/>
      </PrivateRoute>
        <PrivateRoute exact path="/addproduct">
          <AddProduct/>
        </PrivateRoute>
        <PrivateRoute exact path="/editproduct/:id">
          <EditP/>
        </PrivateRoute>
      <PrivateRoute exact path="/wish">
        <Wishlist/>
      </PrivateRoute>
      </Switch>
      {Isloginpage? null:<Footer/>} 
      </Router>

  );
}

export default App;
