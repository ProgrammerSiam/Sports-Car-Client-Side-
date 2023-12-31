import React, { useContext } from "react";
import { AuthContext } from "./../Features/Auth/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return children;
  } else {
  }

  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoutes;
