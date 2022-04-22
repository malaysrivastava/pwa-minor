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


const App = () => {
  
  

  return (
      <Router>
      <Navbar/>
      <Banner/>
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
      </Switch>
      <Footer/>
      </Router>

  );
}

export default App;
