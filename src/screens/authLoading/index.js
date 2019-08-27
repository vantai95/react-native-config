import React from "react";
import {
  AppLoading,
  Asset,
  Font,
  Icon
} from "expo";
import {
  LOGO_URL,
  BACKGROUND_IMAGE_URL,
  DRAWER_COVER,
  DRAWER_IMAGE
} from "../../constants/config";
import { AsyncStorage } from "react-native"

class AuthLoadingScreen extends React.Component {
  verifyLogin = (result) => {
    //___CODE CHECK TOKEN
    //...

    // IF SUCCESS
    //___CODE DISPATCH DATA TO REDUX
    //...
    this.props.navigation.navigate("Home");

    // ELSE
    //....
    // this.props.navigation.navigate("Login");
  }

  getTokenFromStorage = async () => {
    await AsyncStorage.getItem("token", (error, result) => {
      if (result != null && result != "") {
        this.verifyLogin(result);
      } else {
        // this.props.navigation.navigate("Home");
        this.props.navigation.navigate("Login");
      }
    });
  }

  render() {
    return (
      <AppLoading
        startAsync={this._loadResourcesAsync}
        onError={this._handleLoadingError}
        onFinish={this._handleFinishLoading}
      />
    );
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        LOGO_URL,
        BACKGROUND_IMAGE_URL,
        DRAWER_COVER,
        DRAWER_IMAGE
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        "space-mono": require("../../../assets/fonts/SpaceMono-Regular.ttf"),
        "Roboto": require("../../../assets/fonts/Roboto-Thin.ttf"),
      })
    ]);
  };

  _handleLoadingError = error => {

  };

  _handleFinishLoading = () => {
    // this.getTokenFromStorage();
    this.props.navigation.navigate("Home");
  };
};

export default AuthLoadingScreen;
