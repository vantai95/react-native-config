// saga effects
import { fork, call } from "redux-saga/effects";

// import saga
import { watchUserLogin } from "./authenticateSaga";

function* fetchAll() {
  yield fork(watchUserLogin);
}

export default function* rootSaga() {
  yield call(fetchAll)
}
