import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, isAuthenticated, ...rest }) => {
  console.log("+++", isAuthenticated);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
