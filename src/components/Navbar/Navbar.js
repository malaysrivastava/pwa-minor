import React from 'react';
import View from './Navbar-view';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (pageUrl) => {
        setAnchorElNav(null);
        console.log('clicked')
        console.log(navigate)
        navigate(pageUrl);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

  return( <div>
      <View {...{handleCloseNavMenu,handleCloseUserMenu,handleOpenNavMenu,handleOpenUserMenu,anchorElNav,anchorElUser}}/>
      <div className="small_Nav" style={{backgroundColor:'whitesmoke' , padding:'5px'}}>
        <div className="inside">
          All Categories Malay Chicha aap dekh lena isme kya krna hai
        

        </div>
      </div>
     
  </div>
  );
};

export default Navbar;