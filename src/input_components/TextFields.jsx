import { FormControl, TextField } from "@mui/material"
import { Controller } from "react-hook-form";
import { addErrorIntoField } from "../utils/MiscUtils";
import ErrorMessage from "../utils/ErrorMessage";

const TextFields = ({ label, inputProps, control, name, errors, placeholder ,multiline}) => {
  return (
    <FormControl fullWidth sx={{ mb: '1rem' }}>


<Controller
        name={name}
        control={control}
        render={({ field }) => (
     
          <TextField   {...field } {...addErrorIntoField(errors[name]) } name={name} required label={label} variant="outlined" InputProps={inputProps} multiline={multiline === true ? true : false}

          helperText={errors[name] ? <ErrorMessage message={errors[name].message} /> : <ErrorMessage visibility={'hidden'} message={' '} />} placeholder={placeholder}  />
       
          )}
          />
         {/* <FormHelperText id='component-error-text'> {errors[name] ? <ErrorMessage message={errors[name].message} /> : <ErrorMessage visibility={'hidden'} message={' '} />} </FormHelperText>  */}

    </FormControl>
  )
}

export default TextFields