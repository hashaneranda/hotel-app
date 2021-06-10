import React, { Fragment, Suspense } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { ThemeSwitcher, Theme, NotificationWrapper } from "@hotel/styleguide";
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
      <Route exact path="/app" render={() => <Redirect to="/app/foods" />} />
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
        <NotificationWrapper>
          <ApolloProvider client={ApolloClient}>
            <CartContextProvider>
              <BrowserRouter>
                <Layout>
                  <Routes />
                </Layout>
              </BrowserRouter>
            </CartContextProvider>
          </ApolloProvider>
        </NotificationWrapper>
      </Theme>
    </ThemeSwitcher>
  );
}
