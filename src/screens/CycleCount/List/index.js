import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cycleCount } from "../../../store/actions/promotion";

import View from "./view";

const List = () => {
  const dispatch = useDispatch();
  const [selectFilter, setSelectFilter] = useState("all");

  const promotionsQuery = useSelector((state) => state.promotion.cycleCount);
  useEffect(() => {
    dispatch(cycleCount(selectFilter));
  }, [dispatch, selectFilter]);

  return <View {...{ promotionsQuery, selectFilter, setSelectFilter }} />;
};

export default List;
