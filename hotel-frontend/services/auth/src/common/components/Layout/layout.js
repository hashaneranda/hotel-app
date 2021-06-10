import React, { useEffect } from "react";
import { auth$ as auth } from "@hotel/auth-helper";
import { useHistory } from "react-router-dom";

// styles
import { Container, Header, BodyContainer, DataWrapper } from "./styles";

export default function Layout({ children, image }) {
  const history = useHistory();

  useEffect(() => {
    auth.subscribe(({ sessionToken }) => {
      const needsLogin = !sessionToken;
      if (!needsLogin && window.location.pathname === "/login") {
        history.push("/app");
      }
    });
  }, []);

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
