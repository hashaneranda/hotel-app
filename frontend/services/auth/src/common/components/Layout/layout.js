import React, { useState, useEffect } from "react";

// styles
import { Container, Header, BodyContainer, DataWrapper } from "./styles";

export default function Layout({ children }) {
  return (
    <Container>
      <Header>
        <h1>Travel Lodge</h1>
      </Header>
      <BodyContainer>
        <DataWrapper>
          <p>Image goes here</p>
        </DataWrapper>
        <DataWrapper>{children}</DataWrapper>
      </BodyContainer>
    </Container>
  );
}
