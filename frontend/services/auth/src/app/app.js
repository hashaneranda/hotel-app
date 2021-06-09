import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "../pages/Login/login";
import Register from "../pages/Register/register";

export default function Root() {
  return (
    <BrowserRouter>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </BrowserRouter>
  );
}
