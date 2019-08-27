import * as ActionTypes from "./actionTypes";

export const setUser = (data) => {
  return {
    type: ActionTypes.AUTH_SET_USER,
    data
  };
};

export const userLoginSuccess = (data) => {
  return {
    type: ActionTypes.AUTH_USER_LOGIN_SUCCESS,
    data
  };
};

export const userLoginFailed = (data) => {
  return {
    type: ActionTypes.AUTH_USER_LOGIN_FAILED,
    data
  };
};

export const clearUser = () => {
  return {
    type: ActionTypes.AUTH_USER_CLEAR
  };
};
