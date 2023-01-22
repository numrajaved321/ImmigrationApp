import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { makeStyles } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
  MemoryRouter,
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const drawerWidth = 240;
const navItems = ['Home', 'About','Coaching', 'Service', 'Blog', 'Contact'];



function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [navBackground, setNavBackground] = useState('appBarTransparent')
const navRef = React.useRef()
navRef.current = navBackground
useEffect(() => {
    const handleScroll = () => {
        const show = window.scrollY > 310
        if (show) {
            setNavBackground('appBarSolid')
        } else {
            setNavBackground('appBarTransparent')
        }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
        document.removeEventListener('scroll', handleScroll)
    }
}, [])

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      {/* <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
       <Tabs  value={value} onChange={handleChange} centered    textColor="primary" orientation="vertical"
        indicatorColor="primary" > 
          <Tab label={('Home')} value="Home" to="/" component={Link} />
        <Tab label={('Coaching')}  />
        <Tab label={('About')} />
        <Tab label={('Service')}  />
        <Tab label={('Contact')} value="Contact" to="/contact" component={Link} />
        <Tab label={('Blog')} value="Blog" to="/Blog" component={Link} />
       
        
        </Tabs>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
 
  
    
    <Box sx={{ display: 'flex',  }}>
      <CssBaseline />
    
      <AppBar position='absolute' sx={{bgcolor:"transparent", paddingTop:"50px"}} >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
+          >
            MUI
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
          <img src='https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/logo-1.png' alt="logo" />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Tabs  value={value} onChange={handleChange} centered    textColor="white"
        indicatorColor="primary" > 
      
        
       
        <Tab label={('Home')} value="Home" to="/" component={Link} />
        <Tab label={('Coaching')}  />
        <Tab label={('About')} value="AboutUs" to="/aboutus" component={Link}  onMouseOver={handleClick} />
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        
        MenuListProps={{
          onMouseLeave: handleClose,
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} ><Tab label={('About Us')} value="AboutUs" to="/aboutus" component={Link}/></MenuItem>
        <MenuItem onClick={handleClose} ><Tab label={('Error 404')} value="Error404" to="/error404" component={Link} /></MenuItem>
        <MenuItem onClick={handleClose} ><Tab label={('Our Team')} value="OurTeam" to="/ourteam" component={Link} /></MenuItem>
      </Menu>
        <Tab label={('Service')}  />
        <Tab label={('Contact')} value="Contact" to="/contact" component={Link} />
        <Tab label={('Blog')} value="Blog" to="/Blog" component={Link}  />
    
       
        
        </Tabs>
            
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
   
    </Box>
      </>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;