import { createSlice } from "@reduxjs/toolkit";
import storeTypes from "../constants/store-types";
import { PromotionActionsTypes } from "../constants/action-types";

const initialState = {
  scrap: {
    data: [],
    idle: true,
    errors: false,
    loading: false
  },
  adjustment: {
    data: [],
    idle: true,
    errors: false,
    loading: false
  },
  cycleCount: {
    data: [],
    idle: true,
    errors: false,
    loading: false
  }
};

const getReducer = {
  [PromotionActionsTypes.SCRAP.START]: (state) => {
    const query = {
      idle: false,
      loading: true,
      errors: false,
      data: []
    };
    return { ...state, scrap: { ...query } };
  },
  [PromotionActionsTypes.SCRAP.FAIL]: (state) => {
    const query = {
      idle: false,
      loading: false,
      errors: true,
      data: []
    };
    return { ...state, scrap: { ...query } };
  },
  [PromotionActionsTypes.SCRAP.SUCCESS]: (state, action) => {
    const { payload } = action;
    const query = {
      idle: false,
      loading: false,
      errors: false,
      data: payload
    };
    return { ...state, scrap: { ...query } };
  }
};

const adjustmentReducer = {
  [PromotionActionsTypes.ADJUSTMENT.START]: (state) => {
    const query = {
      idle: false,
      loading: true,
      errors: false,
      data: []
    };
    return { ...state, adjustment: { ...query } };
  },
  [PromotionActionsTypes.ADJUSTMENT.FAIL]: (state) => {
    const query = {
      idle: false,
      loading: false,
      errors: true,
      data: []
    };
    return { ...state, adjustment: { ...query } };
  },
  [PromotionActionsTypes.ADJUSTMENT.SUCCESS]: (state, action) => {
    const { payload } = action;
    const query = {
      idle: false,
      loading: false,
      errors: false,
      data: payload
    };
    return { ...state, adjustment: { ...query } };
  }
};

const cycleCountReducer = {
  [PromotionActionsTypes.CYCLE_COUNT.START]: (state) => {
    const query = {
      idle: false,
      loading: true,
      errors: false,
      data: []
    };
    return { ...state, cycleCount: { ...query } };
  },
  [PromotionActionsTypes.CYCLE_COUNT.FAIL]: (state) => {
    const query = {
      idle: false,
      loading: false,
      errors: true,
      data: []
    };
    return { ...state, cycleCount: { ...query } };
  },
  [PromotionActionsTypes.CYCLE_COUNT.SUCCESS]: (state, action) => {
    const { payload } = action;
    const query = {
      idle: false,
      loading: false,
      errors: false,
      data: payload
    };
    return { ...state, cycleCount: { ...query } };
  }
};

const clientSlice = createSlice({
  name: storeTypes.PROMOTION,
  initialState,
  reducers: {
    ...getReducer,
    ...adjustmentReducer,
    ...cycleCountReducer
  }
});

export const { actions } = clientSlice;

export default clientSlice.reducer;
