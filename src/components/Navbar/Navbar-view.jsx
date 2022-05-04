import * as React from 'react';
import { useHistory,Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


const View = ({handleCloseNavMenu,logOutUser,handleCloseUserMenu,handleOpenNavMenu,handleOpenUserMenu,anchorElNav,anchorElUser,img}) => {

     let history = useHistory();
     
    return (
        <AppBar position="" style={{ background: '#424546'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                      variant="h5"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                       <Link to='/' className='logo'>Juit Olx</Link> 
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                           
                             <MenuItem key={1} onClick={()=>handleCloseNavMenu('/product')}>
                                    <Typography textAlign="center">Products</Typography>
                                </MenuItem>
                                <MenuItem key={2} onClick={()=>handleCloseNavMenu('/addproduct')}>
                                    <Typography textAlign="center">Add Products</Typography>
                                </MenuItem>
                                <MenuItem key={3} onClick={()=>handleCloseNavMenu('/wish')}>
                                    <Typography textAlign="center">Wishlist</Typography>
                                </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                       <Link to='/' className="logo">Juit Olx</Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  
                        <Button
                            onClick={()=>handleCloseNavMenu('/product')}
                            sx={{ my: 2, color: 'white', display: 'block' }}>Products</Button>
                        <Button onClick={()=>handleCloseNavMenu('/addproduct')}
                            sx={{ my: 2, color: 'white', display: 'block' }}>Add Products</Button>
                        <Button onClick={()=>handleCloseNavMenu('/wish')}
                            sx={{ my: 2, color: 'white', display: 'block' }}>Wishlist</Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={img} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                           
                                <MenuItem key={4} onClick={logOutUser}>
                                    <Typography textAlign="center">Logout</Typography>
                                </MenuItem>
                                <MenuItem key={5} onClick={()=>handleCloseNavMenu('/mypro')}>
                                    <Typography textAlign="center">My Products</Typography>
                                </MenuItem>
                                <MenuItem key={6} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">Dashboard</Typography>
                                </MenuItem>
                        
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
};
export default View;