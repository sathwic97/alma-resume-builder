import { Box,Button, Divider,Typography, IconButton, Paper} from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh';
import React from 'react'
import DatePickers from '../../input_components/DatePickers'
import TextFields from '../../input_components/TextFields'
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {next,back} from '../util_features/tabIndexSlice'; 
import { useDispatch } from 'react-redux';
import { workExperienceEntry} from './workExperienceSlice';

//schema validation
const schema = yup.object({
jobTitle: yup.string().required('Job Title is required').min(3,'Please enter valid title'),
organisation: yup.string().required('Organisation name is required').min(3,'Please enter valid name'),
jobPoint1: yup.string().required('Enter achievement/task').min(7,'Please enter a sentence'),
jobPoint2: yup.string().required('Enter achievement/task').min(7,'Please enter a sentence'),

jobPoint3: yup.string().required('Enter achievement/task').min(7,'Please enter a sentence'),

started: yup.string().required('Enter Date'),
ended: yup.string().required('Enter Date'),
})

const WorkExperience = () => {
  const dispatch = useDispatch();

    const { handleSubmit,reset, formState: { errors } , control } = useForm({
        defaultValues: {
          jobTitle:'',
          organisation:'',
          jobPoint1:'',
          jobPoint2:'',
          jobPoint3:'',
          started:'',
          ended:'',

        },
        resolver: yupResolver(schema)
      });
     
    
      const onSubmit = (data) => {
       
        dispatch(workExperienceEntry(data));
       
       dispatch(next())
        
      }
  return (
    <>
                 <Paper elevation={5} sx={{
        padding:'25px',
        
    }} >
       
       
       

    <Box noValidate component='form' onSubmit={handleSubmit(onSubmit)}   >
      <Box component='div'>
        <Typography variant='h5' gutterBottom sx={{ fontWeight: 'bold' }}>Work Experience</Typography> 
        </Box>
        <Divider sx={{
            margin:'20px 0'
        }}/>
        <Box component='div' sx={{
        display:"flex",
        alignItems:'center',
        justifyContent:'space-between',
        gap:"15px",

    }}>
        <TextFields errors={errors} control={control} name='jobTitle' label='Job Title' inputProps={{
            type:'text'
        }} />
        <TextFields errors={errors} control={control} name='organisation' label='Organisation' inputProps={{
            type:'text'
        }} />

        </Box>
        <Box component='div' sx={{
        display:"flex",
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        gap:"5px",

    }}>
        <TextFields errors={errors} control={control} name='jobPoint1' label='Achievements/Tasks'  inputProps={{
            type:'text'
        }} />
        <TextFields errors={errors} control={control} name='jobPoint2' label='Achievements/Tasks'  inputProps={{
            type:'text'
        }} />
        <TextFields errors={errors} control={control} name='jobPoint3' label='Achievements/Tasks'  inputProps={{
            type:'text'
        }} />

        </Box>
        
        <Box component='div' sx={{
        display:"flex",
        alignItems:'center',
        justifyContent:'space-between',
        gap:"15px",

    }}>
        <DatePickers errors={errors} control={control} name='started' label='Started' />
        <DatePickers errors={errors} control={control} name='ended' label='Ended' />

        </Box>
        {/* <Box component='div'
        sx={{
          textAlign:'center'
        }}>
            <Button variant='contained' size="large" onClick={()=>dispatch(addMoreExperience({

            }))} >Add More</Button>
        </Box> */}
        <Divider sx={{ margin:'20px 0' }} />

        <Box component='div'  sx={{
        display:"flex",
        justifyContent:'space-between',
        alignItems:'center',
        mt:'7px'


    }}>
    
        <Button variant="outlined" onClick={()=>{dispatch(back())}} startIcon={<KeyboardReturnOutlinedIcon />}>
  Return
</Button>
<IconButton aria-label='refresh button' onClick={()=>(reset())} color='primary.main' size='large' >
    <RefreshIcon/>
</IconButton>
<Button variant="contained" type='submit' endIcon={<SendIcon />}>
  Next
</Button>
</Box>
    </Box>
    </Paper>
    </>

  )
}

export default WorkExperience;

