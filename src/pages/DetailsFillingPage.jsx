import { Box, Paper, Tabs, Tab } from '@mui/material'
// import { LocalizationProvider } from '@mui/x-date-pickers'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React,{ useState } from 'react'
import EducationInformation from '../features/educationInformation/EducationInformation'
import PersonalInformation from '../features/personalInformation/PersonalInformation'
import WorkExperience from '../features/workExperience/WorkExperience';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import Drawer from '@mui/material/Drawer';
// import {styled,useTheme} from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Layout from '../layout/Layout';






const DetailsFillingPage = () => {
 const [tabIndex, setTabIndex] = useState(0);





  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    
    <LocalizationProvider>
    <Layout>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>

      {/* <Tabs value={tabIndex} onChange={handleTabChange} orientation="horizontal">
          <Tab label="Personal Information" />
          <Tab label="Work Experience" />
          <Tab label="Education Information" />
        </Tabs> */}

        <Tabs value={tabIndex} onChange={handleTabChange} orientation="vertical">
          <Tab label="Personal Information" />
          <Tab label="Work Experience" />
          <Tab label="Education Information" />
        </Tabs>

        <Box style={{marginLeft:'auto', marginRight:'auto'}}>
          <Paper elevation={5} sx={{padding:'25px'}}>
        {tabIndex === 0 && (
          <PersonalInformation />
        )}

        {tabIndex === 1 && (
          <WorkExperience />
        )}

        {tabIndex === 2 && (
            <EducationInformation />
        )}
          </Paper>
        </Box>
      </Box>
    </Layout>
  </LocalizationProvider>
  )
}

export default DetailsFillingPage