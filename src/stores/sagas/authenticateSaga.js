import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import * as ActionTypes from "../actions/actionTypes";
import * as Actions from "../actions";
// import { NavigationActions } from "react-navigation";
import toasts from "../../utils/toast";
import I18n from "../../i18n/i18n";

import fakeApi from "../fakeApi";

// user login
function* userLogin(action) {
  try {
    // constructor api
    const userApi = new fakeApi();

    // call api
    const res = yield userApi.Login(action.data.username, action.data.password);

    // check success
    if (res.success) {
      yield put(Actions.userLoginSuccess(res.data));
      toasts.success(I18n.t("LOGIN_success"));
      // yield put(NavigationActions.navigate({routeName: "Home"}));

    } else {
      yield put(Actions.userLoginFailed(res.data.message));
      toasts.danger(I18n.t("LOGIN_failed"));
    }

  } catch (e) {
    yield put(Actions.userLoginFailed(e.message));
  }
}

export function* watchUserLogin() {
  yield takeLatest(ActionTypes.AUTH_USER_LOGIN, userLogin);
}
