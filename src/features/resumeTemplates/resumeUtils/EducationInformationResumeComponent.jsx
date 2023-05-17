import { Typography,Grid, Divider} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import EducationInformationResumeBit from './EducationInformationResumeBit';

const EducationInformationResumeComponent = () => {
    const resumeOptions = useSelector((state)=> state.resumeOptions);
    const educationInfo = useSelector((state)=> state.educationInformation.educationInformation);
    
  return (
    <>
    <Grid container direction={'column'}>
        <Grid container direction={`${resumeOptions.sectionHeadingStyle}`} justifyContent="center" alignItems="flex-start">
            <Grid item>
                
                    <Divider sx={{ borderBottomWidth : `${resumeOptions.borderWidth}px` , borderColor: `${resumeOptions.borderColor}`,}}>
                        </Divider>
                        
            </Grid>
            <Grid item>
                
                    <Typography color={`${resumeOptions.sectionHeadingColor}`} variant="h4">Education Information</Typography>
                
            </Grid>
            {educationInfo?.map((educationInfo)=>( 
                           <EducationInformationResumeBit degree={educationInfo.degree} domain={educationInfo.domain} 
            university={educationInfo.university} start={educationInfo.started} end={educationInfo.ended} /> ))}


        </Grid>


    </Grid>

    </>  )
}

export default EducationInformationResumeComponent