import React from 'react';
import { Container,Paper } from '@mui/material';
import PersonalInformationResumeComponent from './resumeUtils/PersonalInformationResumeComponent';
import WorkExperienceResumeComponent from './resumeUtils/WorkExperienceResumeComponent';
import EducationInformationResumeComponent from './resumeUtils/EducationInformationResumeComponent';

const ResumeTemplate = () => {
  return (
    <>
  
    <Container>
    <Paper elevation={5} sx={{
    padding:'25px',
    
}} >
        <PersonalInformationResumeComponent/>
        <WorkExperienceResumeComponent/>
        <EducationInformationResumeComponent/>
     </Paper>   


    </Container>
    </>
  )
}

export default ResumeTemplate