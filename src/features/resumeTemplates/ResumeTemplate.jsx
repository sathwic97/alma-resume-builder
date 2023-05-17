import React from 'react';
import { Container } from '@mui/material';
import PersonalInformationResumeComponent from './resumeUtils/PersonalInformationResumeComponent';
import WorkExperienceResumeComponent from './resumeUtils/WorkExperienceResumeComponent';
import EducationInformationResumeComponent from './resumeUtils/EducationInformationResumeComponent';

const ResumeTemplate = () => {
  return (
    <Container>
        <PersonalInformationResumeComponent/>
        <WorkExperienceResumeComponent/>
        <EducationInformationResumeComponent/>
        

    </Container>
  )
}

export default ResumeTemplate