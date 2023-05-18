import { Typography,Grid, Divider } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import WorkExperienceResumeBit from './WorkExperienceResumeBit';



const WorkExperienceResumeComponent = () => {
    const resumeOptions = useSelector((state)=> state.resumeOptions);
    const workInfo = useSelector((state)=> state.workExperience.workExperience);
  return (
    <>
    <Grid container >
        <Grid container direction={`${resumeOptions.sectionHeadingStyle}`} justifyContent="center" alignItems="flex-start">
        <Grid xs={'12'} item>
    <Divider sx={{ borderBottomWidth : `${resumeOptions.borderWidth}px` , borderColor: `${resumeOptions.borderColor}`,

    }}></Divider>
</Grid>
            <Grid item>
                
                    <Typography color={`${resumeOptions.sectionHeadingColor}`} variant="h4">Work Experience</Typography>
                
            </Grid>
            </Grid>
         <Grid>
           <WorkExperienceResumeBit workTitle={workInfo.jobTitle} start={workInfo.started} end={workInfo.ended}
           organisation={workInfo.organisation} point1={workInfo.jobPoint1} point2={workInfo.jobPoint2} point3={workInfo.jobPoint3}/> 
        </Grid>


    </Grid>

    </>
  )
}

export default WorkExperienceResumeComponent