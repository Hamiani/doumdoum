import mock from "./mock/auth";

const { login } = mock;

const authApi = {
  login: (data) => login(data)
};

export default authApi;
