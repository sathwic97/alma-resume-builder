import { Typography,Grid, List, ListItem } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const WorkExperienceResumeBit = ({workTitle,start,end,organisation, point1,point2,point3}) => {
    const resumeOptions = useSelector((state)=> state.resumeOptions);
  return (
    <>
    <Grid container>
        {resumeOptions.sectionHeadingStyle === 'column-reverse' ?  
        <>
        
         <Grid container direction={'row'} spacing={'2'} justifyContent={'flex-start'} alignItems={'center'}   >
           
            <Grid item xs>
                
                    <Typography variant='h4'><strong>{workTitle}</strong></Typography>
                    
            </Grid>
            <Grid item xs>
                
                    <Typography paragraph>{organisation} ,  {start} - {end} </Typography>
                
            </Grid>
            <Grid item xs={'3'}>
                {' '}
            </Grid>    
                

         </Grid>
         <Grid container direction={'column'} spacing={'1'} justifyContent={'center'} alignItems={'flex-start'}   >
            <Grid item>
                
                <List sx={{ listStyleType: 'disc', pl: '4' }}>
                    <ListItem>{point1}</ListItem>
                    <ListItem>{point2}</ListItem>
                    <ListItem>{point3}</ListItem>

                    
                </List>
                

            </Grid>

         </Grid>

         </>
            : 
            <>
           
                
            <Grid container direction={'column'} spacing={'1'} justifyContent={'center'} alignItems={'center'}   >
           
            <Grid item xs>
                
                    <Typography variant='h4'>{workTitle}</Typography>
                    
            </Grid>
            <Grid item xs>
                
                    <Typography paragraph>{start} - {end} </Typography>
                
            </Grid>  
                

         </Grid> 
         <Grid container direction={'column'} spacing={'1'} justifyContent={'center'} alignItems={'center'}   >
            <Grid item>
                
                <List sx={{ listStyleType: 'disc', pl: '4' }}>
                    <ListItem>{point1}</ListItem>
                    <ListItem>{point2}</ListItem>
                    <ListItem>{point3}</ListItem>

                    
                </List>
                

            </Grid>

         </Grid>


         </>  }

      
       
            
           
    </Grid>
    </>
  )
}

export default WorkExperienceResumeBit