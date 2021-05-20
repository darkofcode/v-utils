import { Redirect, Route } from "react-router";
import React from "react";
const ProtectedRoute = ({ passport, path, redirectPath = "", children, ...rest }) => {
  return (
    <>
      <Route
        path={path}
        {...rest}
        render={({ location }) =>
          passport ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: `${redirectPath}`,
                state: { from: location },
              }}
            />
          )
        }
      />
    </>
  );
};

export default ProtectedRoute;
