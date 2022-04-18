import List from "./List";

import { PATHS, ROUTES_ACCESS } from "../../utils/constants";
import { MapRoutes } from "../../utils/helpers";
import Layout from "../../Shared/Layout";

const routes = [
  {
    exact: true,
    component: List,
    path: PATHS.SCRAP.LIST,
    access: ROUTES_ACCESS.PRIVATE
  }
];

export default MapRoutes(routes, Layout);
