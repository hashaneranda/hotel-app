import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeSwitcher, Theme } from "@hotel/styleguide";

import Login from "../pages/Login/login";
import Register from "../pages/Register/register";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </BrowserRouter>
  );
};

export default function Root() {
  return (
    <ThemeSwitcher>
      <Theme>
        <Routes />
      </Theme>
    </ThemeSwitcher>
  );
}
