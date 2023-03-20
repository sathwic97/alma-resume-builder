import { Box, Paper, Tabs, Tab } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useState } from 'react'
import EducationInfo from '../form_components/EducationInfo'
import PersonalInfo from '../form_components/PersonalInfo'
import WorkExperience from '../form_components/WorkExperience';
import Layout from '../Layout/Layout';


const DetailsFillingPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Layout>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly'
        }}>
          <Box>
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}

              orientation="vertical"
            >
              <Tab label="Personal Information" />
              <Tab label="Work Experience" />
              <Tab label="Education Information" />
            </Tabs>
          </Box>


          {tabIndex === 0 && (
            <Paper elevation={5} sx={{
              padding: '25px',

            }} >
              <PersonalInfo />

            </Paper>
          )}
          {tabIndex === 1 && (
            <Paper elevation={5} sx={{
              padding: '25px',

            }} >
              <WorkExperience />

            </Paper>
          )}
          {tabIndex === 2 && (
            <Paper elevation={5} sx={{
              padding: '25px',

            }} >
              <EducationInfo />

            </Paper>
          )}





        </Box>

      </LocalizationProvider>
    </Layout>
  )
}

export default DetailsFillingPage