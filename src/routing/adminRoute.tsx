import React, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../utils/context/authContext";

const AdminRoute = ({ children }: any) => {
  const { pathname } = useLocation(); // we have access to the location before we return something
  const { user } = useContext(AuthContext);

  if (user && user?.role === "ADMIN") {
    return children;
  }
  return <Navigate to="/" state={{ to: pathname }} />;
};

export default AdminRoute;
