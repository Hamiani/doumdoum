import React, { useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";

import { PATHS } from "../../../utils/constants";
import { Context } from "../../../Shared/Context";

const Logout = () => {
  const { clearStore } = useContext(Context);

  useEffect(() => {
    clearStore();
  }, [clearStore]);

  return <Redirect to={PATHS.AUTH.LOGIN} />;
};

export default Logout;
