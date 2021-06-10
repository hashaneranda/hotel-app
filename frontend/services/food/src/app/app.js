import React, { Fragment, Suspense } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { ThemeSwitcher, Theme } from "@hotel/styleguide";
import { ApolloClient, ApolloProvider } from "@hotel/api";

//context
import CartContextProvider from "../common/context/cartContext";

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
      <Redirect exact from="/app" to="/app/foods" />
    </Suspense>
  );
};

export default function Root() {
  return (
    <ThemeSwitcher>
      <Theme>
        <ApolloProvider client={ApolloClient}>
          <CartContextProvider>
            <BrowserRouter>
              <Layout>
                <Routes />
              </Layout>
            </BrowserRouter>
          </CartContextProvider>
        </ApolloProvider>
      </Theme>
    </ThemeSwitcher>
  );
}
