import React from "react";
import { get } from "lodash";
import { Route, Redirect } from "react-router-dom";
import { ROUTES_ACCESS, PATHS } from "../../utils/constants";
import { isAuthenticated } from "../../utils/helpers";

const protect = ({ component: Component, authorization, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated(authorization) ? (
        <Component {...props} />
      ) : (
        <Redirect to={PATHS.AUTH.LOGOUT} />
      )
    }
  />
);
const checkRedirection = ({ component: Component, authorization, ...rest }) => {
  const { route } = rest;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated(authorization) &&
        get(route, "path") === PATHS.AUTH.LOGIN ? (
          <Redirect to={PATHS.HOME} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export const checkAuthorization = ({ routes = [], authorization = {} }) =>
  routes.map((route) => {
    const { component, access, ...rest } = route;
    if (access === ROUTES_ACCESS.PRIVATE) {
      return {
        component: (props) =>
          protect({
            component,
            authorization,
            ...props
          }),
        ...rest
      };
    }
    return {
      component: (props) =>
        checkRedirection({ component, authorization, ...props }),
      ...rest
    };
  });

export const MapRoutes = (routes, Layout) =>
  routes.map(({ component: Component, ...rest }) => ({
    component: Layout(Component),
    ...rest
  }));
