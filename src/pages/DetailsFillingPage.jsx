import { Box, Paper, Tabs, Tab } from '@mui/material'
import React,{ useState } from 'react'
import EducationInformation from '../features/educationInformation/EducationInformation'
import PersonalInformation from '../features/personalInformation/PersonalInformation'
import WorkExperience from '../features/workExperience/WorkExperience';
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
       
     
       
     
      
    </Box>
    </Layout>
    </LocalizationProvider>
 
  )
}

export default DetailsFillingPage