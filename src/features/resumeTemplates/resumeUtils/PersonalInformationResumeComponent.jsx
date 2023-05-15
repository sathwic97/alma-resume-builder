import { Typography,Grid,Item, Divider } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export default function PersonalInformationResumeComponent(borderWidth) {
  const personalInfo = useSelector((state)=>state.personalInformation.personalInformation);
  const resumeOptions = useSelector((state)=> state.resumeOptions);
  return (
    <>
    <Grid container>
    <Grid   container
  direction="row"
  justifyContent="space-between"
  alignItems="stretch"    >
  <Grid item xs>
    <Item>xs</Item>
  </Grid>
  <Grid container direction={'column'}  justifyContent="center"
  alignItems="flex-start" spacing={'3'} xs>
  <Grid container color={resumeOptions.nameColor}
  direction="row"
  justifyContent="center"
  alignItems="center" spacing={'2'}>
    <Grid item>
    <Item><Typography variant='h3'>{personalInfo.firstName}</Typography></Item>
    </Grid>
    <Grid item>
    <Item><Typography variant='h3'>{personalInfo.lastName}</Typography></Item>
    </Grid>
  </Grid>
  <Grid item color={resumeOptions.roleColor} >
    <Item><Typography variant='h4'>{personalInfo.role}</Typography></Item>
  </Grid>
  </Grid>
  <Grid container   direction="column" color={resumeOptions.extraInformationColor}
  justifyContent="flex-start"
  alignItems="flex-end" spacing={'1'} xs sx={{color:{}}}>
    <Grid wrap item><Item><Typography paragraph>{personalInfo.address}</Typography></Item></Grid>
    <Grid item><Item><Typography paragraph >{personalInfo.city}, {personalInfo.state} - {personalInfo.postalCode}</Typography></Item></Grid>
    <Grid item><Item><Typography paragraph >{personalInfo.email}</Typography></Item></Grid>
    <Grid item><Item><Typography paragraph >{personalInfo.mobileNumber}</Typography></Item></Grid>
    
  </Grid>
</Grid>
<Grid xs={'12'} item>
    <Item><Divider sx={{ borderBottomWidth : `${resumeOptions.borderWidth}` , borderColor: `${resumeOptions.borderColor}`,

    }}></Divider></Item>
</Grid>


    </Grid>

    </>
  )
};