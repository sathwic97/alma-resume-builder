import { Box, Tabs, Tab, IconButton, Popover, Typography, Divider } from '@mui/material';
import React, { useState } from 'react';
import EducationInformation from '../features/educationInformation/EducationInformation';
import PersonalInformation from '../features/personalInformation/PersonalInformation';
import WorkExperience from '../features/workExperience/WorkExperience';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import PropTypes from 'prop-types';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useSelector } from 'react-redux';
import ResumeTemplate from '../features/resumeTemplates/ResumeTemplate';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Layout from '../layout/Layout'

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
          {children}
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
  const [anchorEl, setAnchorEl] = useState(null);
  const value = useSelector((state) => state.tabIndex.index);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'popover-menu' : undefined;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Layout>
        <Box sx={{marginTop:'5rem'}}>
          <Box display={{ xs: 'block', sm: 'block', lg: 'none' }}>
            <IconButton onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <Box>
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  aria-label="Vertical tabs"
                  sx={{ border: 2, borderColor: 'divider', marginTop:'8px' }}
                >
                  <Tab label={
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                      <AccountCircleOutlinedIcon sx={{ fontSize: 20, marginRight: '5px' }} />
                      <Typography >Personal Information</Typography>
                    </Box>
                  }
                  {...a11yProps(0)}
                  />
                  <Divider />
                  <Tab label={
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                      <WorkHistoryOutlinedIcon sx={{ fontSize: 20, marginRight: '5px' }} />
                      <Typography sx={{ marginRight:'3rem' }}>Work Experience</Typography>
                    </Box>
                  } {...a11yProps(1)} />
                  <Divider />
                  <Tab label={
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                      <HistoryEduOutlinedIcon sx={{ fontSize: 20, marginRight: '5px' }} />
                      <Typography sx={{ marginRight:'4.5rem' }}>Education Info</Typography>
                    </Box>
                  } {...a11yProps(2)} />
                  <Divider />
                  <Tab label={
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                      <StarsOutlinedIcon sx={{ fontSize: 20, marginRight: '5px' }} />
                      <Typography sx={{ marginRight:'7rem' }}>Key Skills</Typography>
                    </Box>
                  } {...a11yProps(3)} />
                  <Divider/>
                </Tabs>
              </Box>
            </Popover>
          </Box>

          <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display:'flex', height: 224 }}
          >
            <Box sx={{display:{xs:'none', sm:'none',lg:'block'}}}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                aria-label="Vertical tabs example"
                sx={{ border: 2, borderColor: 'divider', marginTop:'10px' }}
              >
                <Tab label={
                  <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                    <AccountCircleOutlinedIcon sx={{ fontSize: 20, marginRight: '5px' }} />
                    <Typography >Personal Information</Typography>
                  </Box>
                }
                {...a11yProps(0)}
                />
                <Divider />
                <Tab label={
                  <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                    <WorkHistoryOutlinedIcon sx={{ fontSize: 20, marginRight: '5px' }} />
                    <Typography sx={{ marginRight:'3rem' }}>Work Experience</Typography>
                  </Box>
                } {...a11yProps(1)} />
                <Divider />
                <Tab label={
                  <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                    <HistoryEduOutlinedIcon sx={{ fontSize: 20, marginRight: '5px' }} />
                    <Typography sx={{ marginRight:'4.5rem' }}>Education Info</Typography>
                  </Box>
                } {...a11yProps(2)} />
                <Divider />
                <Tab label={
                  <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                    <StarsOutlinedIcon sx={{ fontSize: 20, marginRight: '5px' }} />
                    <Typography sx={{ marginRight:'7rem' }}>Key Skills</Typography>
                  </Box>
                } {...a11yProps(3)} />
                <Divider/>
                <Tab label="Preview" {...a11yProps(4)} /> 
              </Tabs>
            </Box>
            <Box style={{marginLeft:'auto', marginRight:'auto'}}>
              <TabPanel value={value} index={0}>
                <PersonalInformation />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <WorkExperience />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <EducationInformation />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <ResumeTemplate />
              </TabPanel>
              <TabPanel value={value} index={4}>
                Item 5
              </TabPanel>
            </Box>
          </Box>
        </Box>
      </Layout>
    </LocalizationProvider>
  );
};

export default DetailsFillingPage;
