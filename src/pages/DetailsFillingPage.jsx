import { Box, Paper } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react'
import EducationInfo from '../form_components/EducationInfo'
import PersonalInfo from '../form_components/PersonalInfo'
import WorkExperience from '../form_components/WorkExperience';


const DetailsFillingPage = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Box sx={{
        display:'flex',
        flexDirection:'column',
        gap:'20px'
    }}>
      <Paper elevation={5} sx={{
        padding:'25px',
        
    }} >
        <PersonalInfo/> 
       
        </Paper>
        <Paper elevation={5} sx={{
        padding:'25px',
        
    }} >
            <WorkExperience/>
            </Paper>
            <Paper elevation={5} sx={{
        padding:'25px',
        
    }}>
       
            <EducationInfo/>
            </Paper>
       
      
    </Box>
    
    </LocalizationProvider>
  )
}

export default DetailsFillingPage