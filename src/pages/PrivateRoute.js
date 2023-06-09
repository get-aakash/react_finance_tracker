import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.user);

  return userInfo?.uid ? children : <Navigate to="/" />;
};
