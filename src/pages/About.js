import React from 'react'
import {Typography,Grid} from '@mui/material'
import underheading from '../assets/mark.png'
import Box from '@mui/material/Box'
import about from '../assets/about.png'
import './About.css'

export const About = () => {
  return (
    <>
    <Typography className="heading" sx={{display:{xs:'block',sm:'none',md:'none'}}}>
    Resume  Builder
    </Typography>
    <Typography className="heading" sx={{display:{xs:'none',sm:'block',md:'block'}}} >
    Resume <br/> Builder
    </Typography>
    <img src={underheading}  alt='' className='underheading' />
    <Box sx={{display:'inline-flex'}}>
    <Grid container spacing={2} columnSpacing={2}>
      <Grid item  md={7}  className='content'>
      <p>
        A resume builder is an online tool or software that helps job seekers create a professional and compelling resume.
         It is a digital platform that helps aspiring candidates to create visually appealing and well-structured resumes that showcase their skills, work experience, and education.
         Resume Builder offers free, HR-approved resume templates to help you create a professional resume in minutes.
         Choose from several template options and even pre-populate a resume from your LinkedIn profile. 
         Create an account to save your progress and multiple versions, plus download as a PDF.
         Resume Builder offers free, HR-approved resume templates to help you create a professional resume in minutes.
        Choose from several template options and even pre-populate a resume from your LinkedIn profile. 
         Create an account to save your progress and multiple versions, plus download as a PDF.
        </p>
      </Grid>
      <Grid item md={4} alignItems="flex-end" sx={{width:{xs:'100%',sm:'100%',md:'100%'}}}>
        <img src={about} alt='' className="besideContent"/>
      </Grid>
      <Grid item sm={3} className="sharing">
        Share with Your friends

      </Grid>
    </Grid>
    </Box>
        </>
  )
}
