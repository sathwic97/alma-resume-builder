import {Button, Box, Divider,Typography } from '@mui/material'
import React from 'react'
import DatePickers from '../input_components/DatePickers'
import TextFields from '../input_components/TextFields'
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

//schema validation
const schema = yup.object({
  domain: yup.string().required('Domain is required'),
  university: yup.string().required('University is required'),
  degree: yup.string().required('Degree is required'),
  started: yup.string().required('Enter Date'),
  ended: yup.string().required('Enter Date')


})

const EducationInfo = () => {

const {handleSubmit, formState: { errors }, control} = useForm({

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
  console.log(data);
  
}

  return (
    <Box noValidate component='form' onSubmit={handleSubmit(onSubmit)}   >
    <Typography variant='h5' gutterBottom sx={{ fontWeight: 'bold' }} >Education Information</Typography> 
    <Divider sx={{ margin:'20px 0' }} />
<TextFields errors={errors} control={control} name={'domain'} label={'Domain'} inputProps={{
    type:'text',
}} />
<Box  sx={{
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
<Box  sx={{
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
<Box  sx={{
        display:"flex",
        justifyContent:'space-between',
        alignItems:'center',
        mt:'7px'


    }}>
        <Button variant="outlined" startIcon={<KeyboardReturnOutlinedIcon />}>
  Return
</Button>
<Button variant="contained" type='submit' endIcon={<SendIcon />}>
  Next
</Button>
</Box>
  </Box>
  )
}

export default EducationInfo