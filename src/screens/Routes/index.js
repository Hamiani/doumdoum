import NotFound from "../../Shared/NotFound";
import Scrap from "../Scrap";
import Dashboard from "../Dashboard";
import Auth from "../Auth";
import Adjustement from "../Adjustement";
import CycleCount from "../CycleCount";
import Documents from "../Documents";
import Layout from "../../Shared/Layout";
import { checkAuthorization } from "./helper";
import { PATHS, ROUTES_ACCESS } from "../../utils/constants";

const routes = [
  ...Auth,
  ...Scrap,
  ...Dashboard,
  ...Adjustement,
  ...CycleCount,
  {
    exact: true,
    component: Layout(Documents),
    path: PATHS.DOCUMENTS,
    access: ROUTES_ACCESS.PRIVATE
  },
  { component: NotFound }
];

const guardedRoutes = ({ authorization }) =>
  checkAuthorization({ routes, authorization });

export default guardedRoutes;
