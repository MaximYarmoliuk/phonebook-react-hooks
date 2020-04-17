import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authSelectors } from "../../redux/auth";

export default function PublicRoute({ component: Component, ...routeProps }) {
  const isAuthenticated = useSelector((state) =>
    authSelectors.isAuthenticated(state)
  );
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to="/contacts" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
