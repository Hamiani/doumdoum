import Login from "./Login";
import Logout from "./Logout";

import { PATHS, ROUTES_ACCESS } from "../../utils/constants";
import { MapRoutes } from "../../utils/helpers";
import { PublicContainer } from "../../Shared/Layout";

const routes = [
  {
    exact: true,
    component: Login,
    path: PATHS.AUTH.LOGIN,
    access: ROUTES_ACCESS.PUBLIC
  },
  {
    component: Logout,
    path: PATHS.AUTH.LOGOUT,
    access: ROUTES_ACCESS.PUBLIC
  }
];

export default MapRoutes(routes, PublicContainer);
