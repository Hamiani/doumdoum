import Home from "./Home";

import { PATHS, ROUTES_ACCESS } from "../../utils/constants";
import { MapRoutes } from "../../utils/helpers";
import Layout from "../../Shared/Layout";

const routes = [
  {
    exact: true,
    component: Home,
    path: PATHS.HOME,
    access: ROUTES_ACCESS.PRIVATE
  }
];

export default MapRoutes(routes, Layout);
