import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  id: "",
  username: "sang@imt-soft.com",
  full_name: "",
  authorization_token: "123456"
};

export default currentUser = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_SET_USER: {
      return Object.assign({}, state, {
        id: action.data.id,
        username: action.data.username,
        full_name: action.data.full_name,
        authorization_token: ""
      });
    }
    case ActionTypes.AUTH_CLEAR_USER: {
      return Object.assign({}, state, {
        id: "",
        username: "",
        full_name: "",
        authorization_token: ""
      });
    }
    default: {
      return state;
    }
  }
}
