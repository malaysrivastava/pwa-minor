import React from 'react';
import { useHistory,Link,useLocation } from 'react-router-dom';
import View from './Navbar-view';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let history = useHistory()
  let location = useLocation();
  const dispath = useDispatch();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    // const logOutUser = ()=>{
    //   localStorage.clear()
    //   dispath(product_out())
    //   history.go('/login')
    // }

    const handleCloseNavMenu = (pageUrl) => {
        setAnchorElNav(null);
        history.push(pageUrl)
    };
    const logOutUser = ()=>{
      localStorage.setItem("Token","dfdxfdf");
      history.push('/login')
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    let img;

     
      if(JSON.parse(localStorage.getItem('User'))){
        img = JSON.parse(localStorage.getItem('User')).picture
    }
    

return( 
      <div>
      <View {...{handleCloseNavMenu,logOutUser,handleCloseUserMenu,handleOpenNavMenu,handleOpenUserMenu,anchorElNav,anchorElUser,img}}/>
      <div className="small_Nav" style={{backgroundColor:'whitesmoke' , padding:'5px'}}>
        <div className="inside">
            <div className='cat-1'>
            <Link className="link" to="/product/?category=Stationary">Stationary</Link>
            </div>
            <div className='cat-2'>
            <Link className="link" to="/product/?category=Clothing">
             Clothing
            </Link>
            </div>
            <div className='cat-3'>
            <Link className="link" to="/product/?category=General needs">
             General needs
            </Link>
            </div>
            <div className='cat-4'>
            <Link className="link" to="/product/?category=Food">
              Food
            </Link>
            
            </div>
            <div className='cat-5'>
            <Link className="link" to="/product/?category=Gadgets">
              Gadgets
            </Link>
            </div>
            <div className='cat-6'>
            <Link className="link" to="/product/?category=Books">
              Books
            </Link>
            </div>
       
        </div>
      </div>
     
  </div>
  );
  
}

export default Navbar;