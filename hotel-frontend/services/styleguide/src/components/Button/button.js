import React from "react";

// styles
import { StyledButton } from "./styles";

export default function Button(props) {
  return <StyledButton type="button" {...props} />;
}
