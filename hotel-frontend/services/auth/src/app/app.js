import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { ThemeSwitcher, Theme, NotificationWrapper } from "@hotel/styleguide";
import { ApolloClient, ApolloProvider } from "@hotel/api";

import Login from "../pages/Login/login";
import Register from "../pages/Register/register";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </BrowserRouter>
  );
};

export default function Root() {
  return (
    <ThemeSwitcher>
      <Theme>
        <NotificationWrapper>
          <ApolloProvider client={ApolloClient}>
            <Routes />
          </ApolloProvider>
        </NotificationWrapper>
      </Theme>
    </ThemeSwitcher>
  );
}
