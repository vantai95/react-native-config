import * as ActionTypes from "./actionTypes";

export const startLoading = () => {
  return {
    type: ActionTypes.APP_START_LOADING
  };
};

export const stopLoading = () => {
  return {
    type: ActionTypes.APP_STOP_LOADING
  };
};
