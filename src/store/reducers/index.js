import storeTypes from "../constants/store-types";

import authReducer from "./auth";
import promotionReducer from "./promotion";

const reducers = {
  [storeTypes.AUTH]: authReducer,
  [storeTypes.PROMOTION]: promotionReducer
};

export default reducers;
