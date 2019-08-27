import { createStore, combineReducers, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";

// import reducer
import currentUser from "./authenticateReducer";
import app from "./appReducer";

// import saga
// import rootSaga from "../sagas/rootSaga";

// create the saga middleware
// const sagaMiddleware = createSagaMiddleware()

// create store
export const store = createStore(
  combineReducers({
    currentUser,
    app
  }),
  // applyMiddleware(sagaMiddleware)
);

// then run the saga
// sagaMiddleware.run(rootSaga);