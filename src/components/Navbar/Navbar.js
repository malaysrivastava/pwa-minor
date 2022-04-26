import React from 'react';
import { useHistory } from 'react-router-dom';
import View from './Navbar-view';

const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let history = useHistory()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const logOutUser = ()=>{
      localStorage.clear()
      history.go('/login')
    }

    const handleCloseNavMenu = (pageUrl) => {
        setAnchorElNav(null);
        console.log('clicked')
        history.push(pageUrl)
    };

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
            Stationary
          </div>
          <div className='cat-2'>
            Gadgets
            </div>
            <div className='cat-3'>
            Miscellaneous
            </div>
            <div className='cat-4'>
            Cosmetics
            </div>
            <div className='cat-5'>
            Room decor
            </div>
         
        

        </div>
      </div>
     
  </div>
  );
  
}

export default Navbar;