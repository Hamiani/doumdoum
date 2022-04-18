import { ACCESS_TOKEN } from "../../constants";

export default {
  login: (data) => {
    if (
      data.username === process.env.REACT_APP_USERNAME &&
      data.password === process.env.REACT_APP_PASSWORD
    ) {
      return {
        code: "OK",
        data: {
          accessToken: ACCESS_TOKEN,
          user: {
            username: process.env.USERNAME
          }
        }
      };
    }
    return Promise.reject({
      message: "Erreur d'authentification !"
    });
  }
};
