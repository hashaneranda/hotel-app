/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: SAKS Engineering
 * Version:
 * Description: Top Header of the App
 * Date: 27-01-2020
 */

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import { useHistory } from "react-router-dom";

//images
import { food, logout, order, back } from "../../../config/images";

//styles
import { SidebarWrapper, MainNavWrapper } from "./styles";

const routes = [
  {
    path: "/app/foods",
    name: "Foods",
    img: food,
  },
  {
    path: "/app/orders",
    name: "Order",
    img: order,
  },
];

export const Sidebar = (props) => {
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
          to="/"
        >
          <Tooltip title="Logout" placement="right" arrow>
            <img src={logout} alt="back" className="navLogo" />
          </Tooltip>
        </NavLink>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
