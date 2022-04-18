const promotionActions = {
  SCRAP: {
    START: "promotion.scrap:start",
    SUCCESS: "promotion.scrap:success",
    FAIL: "promotion.scrap:fail"
  },
  ADJUSTMENT: {
    START: "promotion.adjustment:start",
    SUCCESS: "promotion.adjustment:success",
    FAIL: "promotion.adjustment:fail"
  },
  CYCLE_COUNT: {
    START: "promotion.cycleCount:start",
    SUCCESS: "promotion.cycleCount:success",
    FAIL: "promotion.cycleCount:fail"
  }
};

export default promotionActions;
