
import { loginSuccess, logoutSuccess } from "../slices/authSlice";

const fakeLoginAPI = async (credentials) => {

  return new Promise((resolve) => {
    resolve({ token: credentials });
  });
};

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await fakeLoginAPI(credentials);
    const { token } = response;
    console.log("token", token);

    dispatch(loginSuccess({ token }));
  } catch (error) {
    console.error("Login error:", error);
  }
};

export const logout = () => (dispatch) => {
  dispatch(logoutSuccess());
};
