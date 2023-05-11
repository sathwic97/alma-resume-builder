import { Box, Paper, Tabs, Tab } from '@mui/material'
<<<<<<< HEAD
// import { LocalizationProvider } from '@mui/x-date-pickers'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
=======
>>>>>>> be699c7e97e3a7d8fbca5d96112da83136eee870
import React,{ useState } from 'react'
import EducationInformation from '../features/educationInformation/EducationInformation'
import PersonalInformation from '../features/personalInformation/PersonalInformation'
import WorkExperience from '../features/workExperience/WorkExperience';
<<<<<<< HEAD
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import Drawer from '@mui/material/Drawer';
// import {styled,useTheme} from '@mui/material/styles';
=======
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Layout from '../layout/Layout';

>>>>>>> be699c7e97e3a7d8fbca5d96112da83136eee870





const DetailsFillingPage = () => {
<<<<<<< HEAD
 const [tabIndex, setTabIndex] = useState(0);

=======
const [tabIndex, setTabIndex] = useState(0);


>>>>>>> be699c7e97e3a7d8fbca5d96112da83136eee870

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
<<<<<<< HEAD
    
=======
  <LocalizationProvider>
    <Layout>
>>>>>>> be699c7e97e3a7d8fbca5d96112da83136eee870
<Box sx={{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-evenly'
}}>
<<<<<<< HEAD
  
 
=======
>>>>>>> be699c7e97e3a7d8fbca5d96112da83136eee870
         
<Tabs
          value={tabIndex}
          onChange={handleTabChange}

          orientation="vertical"
        >
          <Tab label="Personal Information" />
          <Tab label="Work Experience" />
          <Tab label="Education Information" />
        </Tabs>
<<<<<<< HEAD
        
=======
>>>>>>> be699c7e97e3a7d8fbca5d96112da83136eee870

       {tabIndex === 0 && (
             <Paper elevation={5} sx={{
        padding:'25px',
        
    }} >
        <PersonalInformation   /> 
       
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
          <EducationInformation/>
       
        </Paper>
          )}
       
     
       
<<<<<<< HEAD
      
      
    </Box>
    
=======
     
      
    </Box>
    </Layout>
    </LocalizationProvider>
 
>>>>>>> be699c7e97e3a7d8fbca5d96112da83136eee870
  )
}

export default DetailsFillingPage