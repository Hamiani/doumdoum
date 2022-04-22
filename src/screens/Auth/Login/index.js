import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";

import { Context } from "../../../Shared/Context";
import { login } from "../../../store/actions/auth";
import { PATHS } from "../../../utils/constants";
import View from "./view";

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();
  const history = useHistory();
  const { setToken, setUser } = useContext(Context);

  const openNotification = (message, variant) =>
    enqueueSnackbar(message, {
      variant,
      autoHideDuration: 3500,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      }
    });

  const onSubmit = async (values) =>
    dispatch(
      login(
        values,
        async (response) => {
          const { accessToken, user } = response;
          await setUser(user);
          await setToken({ accessToken });
          history.push(PATHS.HOME);
          openNotification("Connexion réussie", "success");
        },
        (response) => {
          const { message } = response;
          openNotification(message, "error");
        }
      )
    );
  return <View {...{ onSubmit }} />;
};

export default Login;
