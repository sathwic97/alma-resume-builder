import React from 'react'
import { Typography } from '@mui/material'
import mark from '../assets/mark.png'
import about from '../assets/about.png'
import './About.css'

export const About = () => {
  return (
    <>
    <Typography className='heading' sx={{display:{xs:"block",sm:"block",md:"none"}}}>
        Resume Builder
      </Typography>
      
      <Typography className='heading' sx={{display:{xs:"none",sm:"none",md:"block"}}}>
        Resume<br/>Builder
      </Typography>
      <img src={mark}  alt='' className='image1'/>
      <p className='content' >
            A resume builder is a great tool that enables people to create a professional and visually appealing resume.
            These tools help job seekers to structure their information and present it in an organized,
            efficient and attractive manner. Using a resume builder saves time and effort and ensures that the final 
            result is an impressive and effective resume that can help you land that dream job. 
            Overall, a resume builder is one of the best tools for anyone looking 
            for a hassle-free way to create an excellent resume.Choose from several template options and even
            pre-populate a resume from your LinkedIn profile. Create an account
            to save your progress and multiple versions, plus download as a
            PDF.Resume Builder offers free, HR-approved resume templates to help
            you create a professional resume in minutes. Choose from several
            template options and even pre-populate a resume from your LinkedIn
            profile. Create an account to save your progress and multiple
            versions, plus download as a PDF.
      </p>
      <img src={about} alt='' className='image2'/>
      <p className='share'>
        Share with  your friends
      </p>
      
    

    
    </>
  )
}
