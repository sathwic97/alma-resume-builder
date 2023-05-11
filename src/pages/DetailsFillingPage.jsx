import { Box, Paper, Tabs, Tab } from '@mui/material'
// import { LocalizationProvider } from '@mui/x-date-pickers'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React,{ useState } from 'react'
import EducationInfo from '../features/educationInformation/EducationInformation'
import PersonalInfo from '../form_components/PersonalInfo'
import WorkExperience from '../features/workExperience/WorkExperience';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import Drawer from '@mui/material/Drawer';
// import {styled,useTheme} from '@mui/material/styles';





const DetailsFillingPage = () => {
 const [tabIndex, setTabIndex] = useState(0);


  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    
<Box sx={{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-evenly'
}}>
  
 
         
<Tabs
          value={tabIndex}
          onChange={handleTabChange}

          orientation="vertical"
        >
          <Tab label="Personal Information" />
          <Tab label="Work Experience" />
          <Tab label="Education Information" />
        </Tabs>
        

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
    
  )
}

export default DetailsFillingPage