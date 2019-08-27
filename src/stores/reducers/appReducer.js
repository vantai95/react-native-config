import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  loading: false
};

export default app = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.APP_START_LOADING: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case ActionTypes.APP_STOP_LOADING: {
      return Object.assign({}, state, {
        loading: false
      });
    }
    default: {
      return state;
    }
  }
};
