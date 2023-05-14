<<<<<<< HEAD
import { Box, Paper, Tabs, Tab } from '@mui/material'
// import { LocalizationProvider } from '@mui/x-date-pickers'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React,{ useState } from 'react'
=======
import { Box, Tabs, Tab, Typography } from '@mui/material'
import React from 'react'
>>>>>>> 194c82670ae621f02844461ff77469f07ddc2f05
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
<<<<<<< HEAD
=======
import PropTypes from 'prop-types';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useSelector } from 'react-redux';
>>>>>>> 194c82670ae621f02844461ff77469f07ddc2f05






const DetailsFillingPage = () => {
<<<<<<< HEAD
 const [tabIndex, setTabIndex] = useState(0);





  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
=======
  const value = useSelector((state)=> state.tabIndex.index)

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
>>>>>>> 194c82670ae621f02844461ff77469f07ddc2f05

  return (
    
    <LocalizationProvider>
    <Layout>
<<<<<<< HEAD
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
=======
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Personal Information" {...a11yProps(0)} />
        <Tab label="Work Experience" {...a11yProps(1)} />
        <Tab label="Education Information" {...a11yProps(2)} />
        <Tab label="Key Skills" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <PersonalInformation/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WorkExperience/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EducationInformation/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
>>>>>>> 194c82670ae621f02844461ff77469f07ddc2f05
      </Box>
    </Layout>
  </LocalizationProvider>
  )
}

export default DetailsFillingPage