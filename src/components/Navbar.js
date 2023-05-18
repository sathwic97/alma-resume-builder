import React from 'react'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import { Drawer,  List, Typography } from '@mui/material'
import {IconButton} from '@mui/material'
import Divider from '@mui/material/Divider'
import { NavLink } from 'react-router-dom'
import { Box, Stack} from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu';
import Almabetterlogo from '../assets/almabetterlogo.png'
import '../styles/Navbar.css'


const drawerWidth = 240;

export const Navbar = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen (!mobileOpen);
  };
  const drawer =(
    <Box onClick ={handleDrawerToggle} sx={{textAlign:"center"}}>
      <Typography variant='h5' sx={{my:'2'}}>
      <img  src={Almabetterlogo} alt='logo'  height={37}/>
      </Typography>
      <Divider/>
      <List
      className='drawerLinks'
      sx={{
        display: "flex",
        textAlign: "left",
        paddingLeft: "20px",
        flexDirection: "column",
        textDecoration:"none",
        color:"black",
        '&:hover':{
          color:' rgb(0, 128, 255)'
        }
      
      }}>
        <NavLink to='/'  className="navLinks">
           Templates </NavLink>
        <NavLink to='/myresumes'  className="navLinks">
           My Resumes </NavLink>
        <NavLink to='/about'  className="navLinks" >
           About </NavLink>
      </List>
    </Box>
  )

  return (
    <>
      <AppBar  component="nav" sx={{backgroundColor:'white' , color: 'black',padding:{xs:'3px',sm:'10px'}}}>
       <Box display={'flex'}
       flexDirection={'row'}
       alignItems={'center'}
       marginRight={'30px'}
       >
       <IconButton
       size="large"
       color="inherit"
       edge="end"
       id="icon"
       onClick={handleDrawerToggle}
       sx={{mr:2, display:{sm:"none"}}}>
         <MenuIcon sx={{ fontSize:'40px','&:hover':{border:'1px solid #b5b5b5'},borderRadius:'50%',padding:'3px'}}/>
         </IconButton>
          <img  src={Almabetterlogo} alt='logo'  height={37}/>
                    <Box sx={{display:{xs:'none',sm:'block'}}}>
             <Stack direction={'row'} spacing={6}>
           <NavLink to='/'  className="navLink">
           Templates </NavLink>
            <NavLink to='/myresumes'  className="navLink">
           My Resumes </NavLink>
           <NavLink to='/about'  className="navLink" >
           About </NavLink>
           </Stack>
           </Box>
           </Box>
       </AppBar>
    
       <Box component="nav">
        <Drawer
       variant="temporary"
       open={mobileOpen}
       onClose = {handleDrawerToggle}
       ModalProps={{
        keepMounted: true,
       }}
       sx={{
          display: {xs: "block",sm: "none"},
         "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
          }
       }}>
        {drawer}
       </Drawer>
        
    </Box>
    </>

  )
}
