
import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
const location = useLocation();

if (loading) {
  return <Loading />;
}

if (user && user?.email) {
  return children;
}


return <Navigate to="/sign-in" state={{ from: location }} replace />;


  
};

export default PrivateRoute;