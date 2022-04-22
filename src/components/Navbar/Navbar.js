import React from 'react';
import { useHistory } from 'react-router-dom';
import View from './Navbar-view';

const Navbar = ({log}) => {

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
      history.push('/login')
    }

    const handleCloseNavMenu = (pageUrl) => {
        setAnchorElNav(null);
        console.log('clicked')
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
            {/* Master Developer Malay */}
        

        </div>
      </div>
     
  </div>
  );
  
}

export default Navbar;