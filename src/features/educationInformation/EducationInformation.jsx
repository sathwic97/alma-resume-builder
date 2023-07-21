import {Button, Box, Divider,Typography, IconButton, Paper } from '@mui/material'
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
import { useDispatch, useSelector } from 'react-redux';
import { educationInformationEntry } from './educationInformationSlice';
//schema validation
const schema = yup.object({
  domain: yup.string().required('Domain is required'),
  university: yup.string().required('University is required'),
  degree: yup.string().required('Degree is required'),
  started: yup.string().required('Enter Date'),
  ended: yup.string().required('Enter Date')


})

const EducationInformation = () => {
  const dispatch = useDispatch();
  const status = useSelector((state)=>state.educationInformation.status)

const {handleSubmit,reset, formState: { errors }, control} = useForm({

defaultValues:{

domain:'',
university:'',
degree:'',
started:'',
ended:''

},
resolver: yupResolver(schema)

});

const onSubmit = (data) => {
  dispatch(educationInformationEntry(data));
  if(status === 'filled')
  dispatch(next());
  
  
}

  return (
    <>
     <Paper elevation={5} sx={{
        padding:'25px',
        
    }} >
    <Box noValidate component='form' onSubmit={handleSubmit(onSubmit)}   >
      <Box component='div'>
    <Typography variant='h5' gutterBottom sx={{ fontWeight: 'bold' }} >Education Information</Typography> 
    </Box>
    <Divider sx={{ margin:'20px 0' }} />
<TextFields errors={errors} control={control} name={'domain'} label={'Domain'} inputProps={{
    type:'text',
}} />
<Box component='div'  sx={{
        display:"flex",
        alignItems:'center',
        gap:"15px",

    }}
>
<TextFields errors={errors} control={control} name={'university'} label={'University'} inputProps={{
    type:'text',
}}/>
<TextFields errors={errors} control={control} name={'degree'} label={'Degree'} inputProps={{
    type:'text',
}}/>

</Box>
<Box component='div' sx={{
        display:"flex",
        justifyContent:'space-evenly',
        alignItems:'center',
        gap:'25px'
       

    }}
>
<DatePickers errors={errors} control={control} label='Started' name='started'  />
<DatePickers errors={errors} control={control} label='Ended' name='ended' />

</Box>
<Divider sx={{ margin:'20px 0' }} />
<Box component='div' sx={{
        display:"flex",
        justifyContent:'space-between',
        alignItems:'center',
        mt:'7px'


    }}>
        <Button variant="outlined" onClick={()=> dispatch(back())} startIcon={<KeyboardReturnOutlinedIcon />}>
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

export default EducationInformation;