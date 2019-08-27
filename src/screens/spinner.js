import React from "react";
import Spinner from "react-native-loading-spinner-overlay";

export default class SpinnerScreen extends React.Component {
  render() {
    return (<Spinner visible={this.props.app.loading} />);
  }
};
