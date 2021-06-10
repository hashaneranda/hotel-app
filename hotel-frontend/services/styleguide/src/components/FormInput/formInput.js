import React from "react";

import { FormHelperText, TextField, InputAdornment } from "@material-ui/core";

// styles
import { FormControler } from "./styles";

export const TextInput = ({
  formClass,
  inputError,
  startAdorment,
  endAdorment,
  onChange,
  ...props
}) => {
  return (
    <FormControler className={formClass} error={!!inputError}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        error={!!inputError}
        onChange={(e) => onChange(e)}
        InputProps={{
          startAdornment: startAdorment && (
            <InputAdornment position="start">{startAdorment}</InputAdornment>
          ),
          endAdornment: endAdorment && (
            <InputAdornment position="end">{endAdorment}</InputAdornment>
          ),
        }}
        {...props}
      />
      <FormHelperText className="defaultHellperTxt">
        {inputError ? inputError : ""}
      </FormHelperText>
    </FormControler>
  );
};
