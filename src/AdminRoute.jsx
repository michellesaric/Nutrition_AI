import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const AdminRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        user && user.isAdmin ? (
          <Component {...props} />
        ) : (
          <Navigate to="/" replace />
        )
      }
    />
  );
};

export default AdminRoute;
