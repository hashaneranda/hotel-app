import React from "react";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export const successNoty = ({ msg = "", timeout = 5000 }) =>
  toast.success(msg, {
    position: "top-center",
    autoClose: timeout,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
  });

export const errorNoty = ({ msg = "", timeout = 5000 }) =>
  toast.error(msg, {
    position: "top-center",
    autoClose: timeout,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
  });

export default function NotificationWrapper({ children }) {
  return (
    <>
      {children}
      <ToastContainer
        position="top-center"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </>
  );
}
