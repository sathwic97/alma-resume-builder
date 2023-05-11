import React from 'react'
import {Typography,Grid} from '@mui/material'
import underheading from '../assets/mark.png'
import Box from '@mui/material/Box'
// import about from '../assets/about.png'
import '../styles/About.css'

export const About = () => {
  return (
    <>
    <Typography className="heading" sx={{display:{xs:'block',sm:'block',md:'none'}}} >
    Resume  Builder
    </Typography>
    <Typography className="heading" sx={{display:{xs:'none',sm:'none',md:'block'}}} >
    Resume <br/> Builder
    </Typography>
    <img src={underheading}  alt='' className='underheading' />
    <Box sx={{display:'inline-flex'}}>
    <Grid container spacing={2} columnSpacing={2}>
    
      <Grid item lg={7} className='content'>
        <p>
        Resume builders are the perfect tool for job seekers who want to create a professional and engaging resume.
       These software programs are designed to simplify the process of creating a resume by providing easy-to-use templates and step-by-step guidance for each section of the document.
       With a resume builder, job seekers can quickly and easily create a customized resume. Choose from several template options and even
      pre-populate a resume from your LinkedIn profile. Create an account to save your progress and multiple versions, plus download as a PDF.
      Resume Builder offers free, HR-approved resume templates to help you create a professional resume in minutes.
       Choose from several template options and even pre-populate a resume from your LinkedIn profile.
        Create an account to save your progress and multiple versions, plus download as a PDF.
        </p>
      </Grid>
      
      
    </Grid>
    </Box>
        </>
  )
}
