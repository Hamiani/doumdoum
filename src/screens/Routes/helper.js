import React from "react";
import { get } from "lodash";
import { Route, Redirect } from "react-router-dom";
import { ROUTES_ACCESS, PATHS } from "../../utils/constants";
import { isAuthenticated } from "../../utils/helpers";

const WITH_ACCESS = {
  true: ({ Component, props }) => <Component {...props} />,
  false: () => <Redirect to={PATHS.HOME} />
};

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
  console.log("route :>> ", route);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated(authorization) &&
        get(route, "path") === PATHS.AUTH.LOGIN ? (
          <Redirect to={PATHS.AUTH.LOGIN} />
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
    console.log("route :>> ", route);
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
