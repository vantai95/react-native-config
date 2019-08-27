import { store } from "../stores/reducers";
import * as Actions from "../stores/actions";

const start = () => {
  store.dispatch(Actions.startLoading());
};

const stop = () => {
  store.dispatch(Actions.stopLoading());
};

export default {
  start,
  stop
};