import { Typography,Grid, Divider } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export default function PersonalInformationResumeComponent( ) {
  const personalInfo = useSelector((state)=>state.personalInformation.personalInformation);
  const resumeOptions = useSelector((state)=> state.resumeOptions);
  return (
    <>
    <Grid container>
    <Grid   container
  direction="row"
  justifyContent="space-between"
  alignItems="stretch" bgcolor={`${resumeOptions.backgroundColor}`}   >
  <Grid item xs>
    xs
  </Grid>
  <Grid container direction={'column'}  justifyContent="center"
  alignItems="flex-start" spacing={'3'} xs>
  <Grid container color={`${resumeOptions.nameColor}`}
  direction="row"
  justifyContent="center"
  alignItems="center" spacing={'2'}>
    <Grid item>
    <Typography variant='h3'>{personalInfo.firstName}</Typography>
    </Grid>
    <Grid item>
    <Typography variant='h3'>{personalInfo.lastName}</Typography>
    </Grid>
  </Grid>
  <Grid item color={`${resumeOptions.roleColor}`} >
    <Typography variant='h4'>{personalInfo.role}</Typography>
  </Grid>
  </Grid>
  <Grid container   direction="column" color={`${resumeOptions.extraInformationColor}`}
  justifyContent="flex-start"
  alignItems="flex-end" spacing={'1'} xs >
    <Grid wrap item><Typography paragraph>{personalInfo.address}</Typography></Grid>
    <Grid item><Typography paragraph >{personalInfo.city}, {personalInfo.state} - {personalInfo.postalCode}</Typography></Grid>
    <Grid item><Typography paragraph >{personalInfo.email}</Typography></Grid>
    <Grid item><Typography paragraph >{personalInfo.mobileNumber}</Typography></Grid>
    
  </Grid>
</Grid>
<Grid xs={'12'} item>
    <Divider sx={{ borderBottomWidth : `${resumeOptions.borderWidth}px` , borderColor: `${resumeOptions.borderColor}`,

    }}></Divider>
</Grid>
<Grid item wrap='true' xs={'12'}>
  <Typography paragraph color={`${resumeOptions.objectiveColor}`} >{personalInfo.objective}</Typography>
</Grid>


    </Grid>

    </>
  )
};