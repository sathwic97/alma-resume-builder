import { Typography,Grid} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const EducationInformationResumeBit = ({degree,domain,university,start,end}) => {
    const resumeOptions = useSelector((state)=> state.resumeOptions);
  return (
    <>
    <Grid container>
        {resumeOptions.sectionHeadingStyle === 'column-reverse' &&  
        
        
         <Grid container direction={'row'} spacing={'2'} justifyContent={'flex-start'} alignItems={'center'}   >
           
            <Grid item xs>
                
                    <Typography variant='h4'><strong>{degree} - {domain}</strong></Typography>
                    
            </Grid>
            <Grid item xs>
                
                    <Typography paragraph>{university} , {start} - {end} </Typography>
                
            </Grid>
            <Grid item xs={'3'}>
                {' '}
            </Grid>    
                

         </Grid>
        

  }
            
            
            
            
            {resumeOptions.sectionHeadingStyle === 'column' &&
           
           
           
           <Grid container direction={'column'} spacing={'1'} justifyContent={'center'} alignItems={'center'}   >
          
           <Grid item xs>
               
                   <Typography variant='h4'>{degree} - {domain}</Typography>
                   
           </Grid>
           <Grid item xs>
               
                   <Typography paragraph>{university} , {start} - {end} </Typography>
               
           </Grid>  
               

        </Grid> 
      

            }
            
        
         
  


          

      
       
            
           
    </Grid>
    </>
  )
}

export default EducationInformationResumeBit