import React, { useEffect } from "react";
import { auth$ as auth } from "@hotel/auth-helper";
import { useHistory } from "react-router-dom";

// components
import Sidebar from "../Sidebar/sidebar";

// styles
import { Container, BodyContainer } from "./styles";

export default function Layout({ children }) {
  const history = useHistory();

  useEffect(() => {
    auth.subscribe(({ sessionToken }) => {
      const needsLogin = !sessionToken;
      if (needsLogin) history.push("/login");
      else if (!needsLogin && window.location.pathname === "/login") {
        history.push("/app");
      }
    });
  }, [window.location.pathname]);

  return (
    <Container>
      <Sidebar />
      <BodyContainer>{children}</BodyContainer>
    </Container>
  );
}
