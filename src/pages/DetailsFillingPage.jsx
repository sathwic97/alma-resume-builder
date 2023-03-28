import { Box, Paper, Tabs, Tab } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React,{ useState } from 'react'
import EducationInfo from '../form_components/EducationInfo'
import PersonalInfo from '../form_components/PersonalInfo'
import WorkExperience from '../form_components/WorkExperience';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Drawer from '@mui/material/Drawer';
import {useTheme} from '@mui/material/styles';


const DetailsFillingPage = () => {
 const drawerWidth = 340;
 const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);
  const [open,setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
<Box sx={{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-evenly'
}}>
 <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
      
          {/* <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon/>
          </IconButton> */}
       
<IconButton
            color="red"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
           
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
         
<Tabs
          value={tabIndex}
          onChange={handleTabChange}

          orientation="vertical"
        >
          <Tab label="Personal Information" />
          <Tab label="Work Experience" />
          <Tab label="Education Information" />
        </Tabs>
        </Drawer>
   

       {tabIndex === 0 && (
             <Paper elevation={5} sx={{
        padding:'25px',
        
    }} >
        <PersonalInfo   /> 
       
        </Paper>
          )}
           {tabIndex === 1 && (
             <Paper elevation={5} sx={{
        padding:'25px',
        
    }} >
        <WorkExperience/>
       
        </Paper>
          )}
           {tabIndex === 2 && (
             <Paper elevation={5} sx={{
        padding:'25px',
        
    }} >
          <EducationInfo/>
       
        </Paper>
          )}
       
     
       
       
      
    </Box>
    
    </LocalizationProvider>
  )
}

export default DetailsFillingPage