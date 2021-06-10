import React, { useState, useEffect } from "react";

// styles
import { Container, Header, BodyContainer, DataWrapper } from "./styles";

export default function Layout({ children, image }) {
  return (
    <Container>
      <Header>
        <h1>Travel Lodge</h1>
      </Header>
      <BodyContainer>
        <DataWrapper>
          <img src={image} alt="background" />
        </DataWrapper>
        <DataWrapper>{children}</DataWrapper>
      </BodyContainer>
    </Container>
  );
}
