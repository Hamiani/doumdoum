import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { notification } from "antd";

import { Context } from "../../../Shared/Context";
import { login } from "../../../store/actions/auth";
import { PATHS } from "../../../utils/constants";
import View from "./view";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { setToken, setUser } = useContext(Context);

  const onSubmit = async (values) =>
    dispatch(
      login(
        values,
        async (response) => {
          const { accessToken, user } = response;
          await setUser(user);
          await setToken({ accessToken });
          history.push(PATHS.HOME);
          notification.open({
            type: "success",
            message: "Connexion réussie"
          });
        },
        (response) => {
          const { message } = response;
          notification.open({
            type: "error",
            message
          });
        }
      )
    );
  return <View {...{ onSubmit }} />;
};

export default Login;
