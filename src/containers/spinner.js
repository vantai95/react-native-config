import { connect } from "react-redux";
import SpinnerScreen from "../screens/spinner";

const mapStateToProps = (state) => {
  return {
    app: state.app
  }
};

export default connect(mapStateToProps)(SpinnerScreen);
