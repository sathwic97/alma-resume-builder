import { FormControl, TextField } from "@mui/material"
import { Controller } from "react-hook-form";
import { addErrorIntoField } from "../utils/MiscUtils";
import ErrorMessage from "../utils/ErrorMessage";

const TextFields = ({ label, inputProps, control, name, errors }) => {
  return (
    <FormControl fullWidth sx={{ mb: '1rem' }}>


<Controller
        name={name}
        control={control}
        render={({ field }) => (
     
          <TextField   {...field } {...addErrorIntoField(errors[name]) } name={name} required label={label} variant="outlined" InputProps={inputProps} />
       
          )}
          />
          {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}

    </FormControl>
  )
}

export default TextFields