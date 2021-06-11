import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { logout } from "@hotel/auth-helper";
import Tooltip from "@material-ui/core/Tooltip";

//images
import { food, logout as logoutImg, order, cart } from "../../../config/images";

//styles
import { SidebarWrapper, MainNavWrapper } from "./styles";

// context
import { CartContext } from "../../context/cartContext";

const routes = [
  {
    path: "/app/foods",
    name: "Foods",
    img: food,
  },
  {
    path: "/app/cart",
    name: "Cart",
    img: cart,
  },
  {
    path: "/app/orders",
    name: "Order",
    img: order,
  },
];

export const Sidebar = () => {
  const { clearCart } = useContext(CartContext);

  return (
    <>
      <SidebarWrapper>
        <MainNavWrapper>
          {routes.map((route) => (
            <NavLink
              className="navLink d-flex flex-row align-items-center  justify-content-center"
              to={route.path}
            >
              <Tooltip title={route.name} placement="right" arrow>
                <img src={route.img} alt="back" className="navLogo" />
              </Tooltip>
              {/* {route.name} */}
            </NavLink>
          ))}
        </MainNavWrapper>
        <NavLink
          className="navLink d-flex flex-row align-items-center  justify-content-center"
          to="/login"
          onClick={() => {
            clearCart();
            logout();
          }}
        >
          <Tooltip title="Logout" placement="right" arrow>
            <img src={logoutImg} alt="back" className="navLogo" />
          </Tooltip>
        </NavLink>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
