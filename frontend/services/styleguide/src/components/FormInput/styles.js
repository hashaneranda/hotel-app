import styled from "styled-components";
import { FormControl } from "@material-ui/core";

export const FormControler = styled(FormControl)`
  .MuiInputBase-input,
  .MuiFormLabel-root {
    font-family: ${(props) => props.theme.typography.body};
    color: ${(props) => props.theme.palette.typography.main};
  }

  .MuiFormLabel-root {
    color: ${(props) => props.theme.palette.typography.secondary};
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.palette.typography.lighter};
    border-radius: 8px;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.palette.typography.main};
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.palette.typography.main};
  }
`;
