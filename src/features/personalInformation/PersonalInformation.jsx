import { Box, Button, Divider, IconButton, InputAdornment, Typography, Paper } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh';
import React from 'react'
import TextFields from '../../input_components/TextFields'
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { phoneRegEx, postalCodeRegEx } from '../../utils/MiscUtils';
import {next} from '../util_features/tabIndexSlice'; 
import { personalInformationEntry } from './personalInformationSlice';
import { useDispatch, useSelector } from 'react-redux';



// create schema validation
const schema = yup.object({
    firstName: yup.string().required('First Name is required').min(3,'Please enter valid name').max(25,'Please enter valid name'),
    lastName: yup.string().required('Last Name is required').min(3,'Please enter valid name').max(25,'Please enter valid name'),
    role: yup.string().required('Please enter your job role').min(3,'Please enter valid name').max(30,'Please enter valid name'),
    email: yup.string().required('Email is required').email(),
    mobileNumber: yup.string().required('Mobile Number is required').matches(phoneRegEx, 'Mobile number is not valid'),
    address: yup.string().required('Address is required').min(5,'Please enter valid address'),
    city: yup.string().required('City is required').min(2,'Please enter your City'),
    state: yup.string().required('State is required').min(2,'Please enter your State'),
    postalCode: yup.string().required('Postal Code is required').matches(postalCodeRegEx,'Enter valid code'),
    objective: yup.string().required('Objective is required').min(10,'Please enter your objective'),

})

const PersonalInformation = () => {
    const dispatch = useDispatch();
    const status = useSelector((state)=> state.personalInformation.status);


    const { handleSubmit, reset, formState: { errors }, control } = useForm({
        defaultValues: {
          firstName:'',
          lastName:'',
          role:'',
          email:'',
          mobileNumber:'',
          address:'',
          city:'',
          state:'',
          postalCode:'',
          objective:'',

        },
        resolver: yupResolver(schema)
      });
    
      const onSubmit = (data) => {
        dispatch(personalInformationEntry(data));

        if( status === 'filled')
         dispatch(next());
        
      }

  return (
    <>
        <Paper elevation={5} sx={{
        padding:'25px',
        
    }} >

    <Box noValidate component='form' onSubmit={handleSubmit(onSubmit)}   >
        <Box component='div'>
        <Typography variant='h5' gutterBottom sx={{ fontWeight: 'bold' }}>Personal Information</Typography> 
        <Divider sx={{ margin:'20px 0'}} />
        </Box>
      
    <Box component='div'
    sx={{
        display:"flex",
        alignItems:'center',
        justifyContent:'space-between',
        gap:"15px",

    }}>
        <TextFields control={control} errors={errors} name='firstName' label="First Name" inputProps={{
            type:'text'
        }

        }/>
        <TextFields control={control} errors={errors} name='lastName' label="Last Name" inputProps={{
            type:'text'
        }

        }/>
    </Box>
    <Box component='div'
    sx={{
        display:"flex",
        alignItems:'center',
       

    }}>
        <TextFields control={control} errors={errors} name='role' label="Job Role" inputProps={{
            type:'text'
        }

        }/>
    </Box>
    <Box component='div'
    sx={{
        display:"flex",
        alignItems:'center',
        justifyContent:'space-between',
        gap:"15px",
        
    }}>
        <TextFields control={control} errors={errors} name='email' label="Email" inputProps={{
            type:'email'
        }

        }/>
        <TextFields control={control} errors={errors} name='mobileNumber' label="Mobile Number" inputProps={{
            type:'number',
            startAdornment:<InputAdornment position='start'>+91</InputAdornment>
        }

        }/>
    </Box>
    <TextFields control={control} errors={errors} name='address' multiLine={'true'}  label="Address" inputProps={{
            type:'text'
        }

        }/>
         <Box component='div'
    sx={{
        display:"flex",
        alignItems:'center',
        justifyContent:'space-between',
        gap:"15px",


    }}>
        <TextFields control={control} errors={errors} name='city' label="City" inputProps={{
            type:'text'
        }

        }/>
        <TextFields control={control} errors={errors} name='state' label="State" inputProps={{
            type:'text'
        }

        }/>
        <TextFields control={control} errors={errors} name='postalCode' label="Postal Code" inputProps={{
            type:'number',
            
        }

        }/>
    </Box>
    <Box component='div'>
    
          <TextFields control={control} errors={errors} multiline={'true'} name='objective' label="Objective" inputProps={{
            type:'text'
        }

        }/>
        
        </Box>
       
        <Divider sx={{ margin:'20px 0' }} />

        <Box component='div'  sx={{
        display:"flex",
        justifyContent:'space-between',
        alignItems:'center',
        mt:'7px'


    }}>
        <Button variant="outlined"  startIcon={<KeyboardReturnOutlinedIcon />}>
  Return
</Button>

<IconButton aria-label='refresh button' onClick={()=>(reset())} color='primary.main' size='large' >
    <RefreshIcon/>
</IconButton>

<Button type='submit' variant="contained" endIcon={<SendIcon />}>
  Next
</Button>
</Box>
    </Box>
    </Paper>
    </>
  )
}

export default PersonalInformation;