import React, { Fragment, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeSwitcher, Theme } from "@hotel/styleguide";

// components
import Layout from "../common/components/Layout/layout";

const Foods = React.lazy(() => import("../pages/Foods/foods"));
const Orders = React.lazy(() => import("../pages/Orders/orders"));
const Cart = React.lazy(() => import("../pages/Cart/cart"));

const Routes = () => {
  return (
    <Suspense fallback={<Fragment />}>
      <Route path="/app/foods" exact component={Foods} />
      <Route path="/app/orders" exact component={Orders} />
      <Route path="/app/cart" exact component={Cart} />
    </Suspense>
  );
};

export default function Root() {
  return (
    <ThemeSwitcher>
      <Theme>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </Theme>
    </ThemeSwitcher>
  );
}
