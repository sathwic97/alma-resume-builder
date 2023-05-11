import { Box,Button, Divider,Typography, IconButton} from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh';
import React from 'react'
import DatePickers from '../../input_components/DatePickers'
import TextFields from '../../input_components/TextFields'
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

//schema validation
const schema = yup.object({
jobTitle: yup.string().required('Job Title is required').min(3,'Please enter valid title'),
organisation: yup.string().required('Organisation name is required'),
started: yup.string().required('Enter Date'),
ended: yup.string().required('Enter Date'),
})

const WorkExperience = () => {
    const { handleSubmit,reset, formState: { errors } , control } = useForm({
        defaultValues: {
          jobTitle:'',
          organisation:'',
          started:'',
          ended:'',

        },
        resolver: yupResolver(schema)
      });
    
      const onSubmit = (data) => {
        console.log(data);
        
      }
  return (
    <>
    <Box noValidate component='form' onSubmit={handleSubmit(onSubmit)}   >
        <Typography variant='h5' gutterBottom sx={{ fontWeight: 'bold' }}>Work Experience</Typography> 

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
        alignItems:'center',
        justifyContent:'space-between',
        gap:"15px",

    }}>
        <DatePickers errors={errors} control={control} name='started' label='Started' />
        <DatePickers errors={errors} control={control} name='ended' label='Ended' />

        </Box>
        <Divider sx={{ margin:'20px 0' }} />

        <Box component='div'  sx={{
        display:"flex",
        justifyContent:'space-between',
        alignItems:'center',
        mt:'7px'


    }}>
        <Button variant="outlined" startIcon={<KeyboardReturnOutlinedIcon />}>
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
    </>

  )
}

export default WorkExperience