import { Box, Tabs, Tab, Typography } from '@mui/material'
import React,{ useState } from 'react'
import EducationInformation from '../features/educationInformation/EducationInformation'
import PersonalInformation from '../features/personalInformation/PersonalInformation'
import WorkExperience from '../features/workExperience/WorkExperience';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Layout from '../layout/Layout';
import PropTypes from 'prop-types';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


const DetailsFillingPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Layout>
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
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
      </Box>
    </Layout>
    </LocalizationProvider>
 
  )
}

export default DetailsFillingPage