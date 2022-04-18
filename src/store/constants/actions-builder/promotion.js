import { actions } from "../../reducers/promotion";
import { PromotionActionsTypes } from "../action-types";

const formationActionsBuilder = {
  SCRAP: {
    START: actions[PromotionActionsTypes.SCRAP.START],
    SUCCESS: actions[PromotionActionsTypes.SCRAP.SUCCESS],
    FAIL: actions[PromotionActionsTypes.SCRAP.FAIL]
  },
  ADJUSTMENT: {
    START: actions[PromotionActionsTypes.ADJUSTMENT.START],
    SUCCESS: actions[PromotionActionsTypes.ADJUSTMENT.SUCCESS],
    FAIL: actions[PromotionActionsTypes.ADJUSTMENT.FAIL]
  },
  CYCLE_COUNT: {
    START: actions[PromotionActionsTypes.CYCLE_COUNT.START],
    SUCCESS: actions[PromotionActionsTypes.CYCLE_COUNT.SUCCESS],
    FAIL: actions[PromotionActionsTypes.CYCLE_COUNT.FAIL]
  }
};

export default formationActionsBuilder;
