import isEmpty from "lodash/isEmpty";
import { notification } from "antd";

export const openNotification = ({
  type = "info",
  message = "",
  duration = 4
}) => {
  notification[type]({
    message,
    style: {
      width: 400,
      background: "#f0f0f0",
      borderRadius: "0.7em",
      position: "relative"
    },
    duration
  });
};

export const MapRoutes = (routes, Layout) =>
  routes.map(({ component: Component, ...rest }) => ({
    component: Layout(Component),
    ...rest
  }));

export const isEvenNumber = (num) => num % 2 === 0;

export const isAuthenticated = (authorization) => {
  const { accessToken, user } = authorization;
  return !!accessToken && !isEmpty(user);
};

export const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

export const removeSpace = (myString) =>
  myString && myString.replace(/\s/g, "");

export const formatDate = (date) =>
  date &&
  `${date.substring(3, 5)}-${date.substring(0, 2)}-${date.substring(
    6,
    date.length
  )}`;
