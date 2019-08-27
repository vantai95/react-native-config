
import { connect } from "react-redux";
import * as Actions from "../../../stores/actions";

import AuthenticateScreen from "../../../screens/auths/authenticate";

const mapDispatchToProps = (dispatch) => {
  return {
    onSetUser: (data) => {
      dispatch(Actions.setUser(data));
    }
  };
};

export default connect(null, mapDispatchToProps)(AuthenticateScreen);
