import api from "../../utils/api/promotion";
import { CommonActionTypes } from "../constants/action-types";
import { PromotionActionsBuilder } from "../constants/actions-builder";

export const scrap = (filter, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: PromotionActionsBuilder.SCRAP,
  promise: () => api.scrap(filter),
  successCallback,
  errorCallback
});

export const adjustement = (filter, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: PromotionActionsBuilder.ADJUSTMENT,
  promise: () => api.adjustement(filter),
  successCallback,
  errorCallback
});

export const cycleCount = (filter, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: PromotionActionsBuilder.CYCLE_COUNT,
  promise: () => api.cycleCount(filter),
  successCallback,
  errorCallback
});
