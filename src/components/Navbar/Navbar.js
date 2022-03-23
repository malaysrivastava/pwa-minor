import React,{useEffect, useState} from 'react';
import View from './Navbar-view';
import { useNavigate} from 'react-router-dom';

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

  const [show,setShow] = useState(true);
  var excp = window.location.pathname;

  useEffect(()=>{
  console.log(excp)
    if(excp=='/login'){
      setShow(false);
    }else{
      setShow(true);
    }
  },[2])
  
if(show){
return( 
      <div>
      <View {...{handleCloseNavMenu,handleCloseUserMenu,handleOpenNavMenu,handleOpenUserMenu,anchorElNav,anchorElUser}}/>
      <div className="small_Nav" style={{backgroundColor:'whitesmoke' , padding:'5px'}}>
        <div className="inside">
          <div className='cat-1'>
            Cat-1
          </div>
          <div className='cat-2'>
            Cat-2
            </div>
            <div className='cat-3'>
            Cat-3
            </div>
            <div className='cat-4'>
            Cat-4
            </div>
            <div className='cat-5'>
            Cat-5
            </div>
         
        

        </div>
      </div>
     
  </div>
  );
} else {
  console.log("check")
  return(
    <></>
  )
}
}

export default Navbar;