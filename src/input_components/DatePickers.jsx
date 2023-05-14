import { FormControl,FormHelperText } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import React from 'react'
import { Controller } from 'react-hook-form'
import { addErrorIntoField } from "../utils/MiscUtils"
import ErrorMessage from "../utils/ErrorMessage"


const DatePickers = ({label, name, control, errors}) => {
  return (
    <FormControl fullWidth sx={{mb:'1rem'}}>
        <Controller
        name={name}
        control={control}
        render={({ field })=>(
            <DatePicker {...field} {...addErrorIntoField(errors[name])} name={name} label={label} views={['month','year']} format="MM-YYYY"  required  />
        )}
   />
 <FormHelperText id='component-error-text'> {errors[name] ? <ErrorMessage message={errors[name].message} /> : <ErrorMessage visibility={'hidden'} message={' '} /> } </FormHelperText>
    </FormControl>
  )
}

export default DatePickers