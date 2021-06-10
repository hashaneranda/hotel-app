import React, { Fragment, useEffect } from "react";

// components
import Sidebar from "../Sidebar/sidebar";

// styles
import { Container, BodyContainer } from "./styles";

export default function Layout({ children }) {
  return (
    <Container>
      <Sidebar />
      <BodyContainer>{children}</BodyContainer>
    </Container>
  );
}
