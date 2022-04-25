import React, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const PrivateRoute = ({ children }: any) => {
  const { pathname } = useLocation(); // we have access to the location before we return something
  const { user } = useContext(AuthContext);
  const jwt = localStorage.getItem("jwt");
  if (jwt || user) {
    return children;
  }
  return <Navigate to="/connexion" state={{ to: pathname }} />;
};

export default PrivateRoute;
