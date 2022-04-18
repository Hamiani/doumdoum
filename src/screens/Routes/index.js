import NotFound from "../../Shared/NotFound";
import Scrap from "../Scrap";
import Dashboard from "../Dashboard";
import Auth from "../Auth";
import Adjustement from "../Adjustement";
import CycleCount from "../CycleCount";

import { checkAuthorization } from "./helper";
const routes = [
  ...Auth,
  ...Scrap,
  ...Dashboard,
  ...Adjustement,
  ...CycleCount,
  { component: NotFound }
];

export default ({ authorization }) => {
  return checkAuthorization({ routes, authorization });
};
