import React from "react";

// redux
import { Provider } from "react-redux";
import { store } from "../stores/reducers";

// navigation
import AppNavigator from "../navigation/appNavigator";

// spinner
import SpinnerContainer from "../containers/spinner";

// theme
import {
  StyleProvider,
  Root
} from "native-base";
import getTheme from "../theme/components";
import { THEME } from "../constants/config";

// setup language
import { setLocale } from "../i18n/i18n";

export default class Setup extends React.Component {

  // componentWillMount() {
  //   setLocale('en');
  // }
  
  render() {
    return (
      <StyleProvider style={getTheme(THEME)}>
        <Root>
          <Provider store={store}>
            <SpinnerContainer />
            <AppNavigator />
          </Provider>
        </Root>
      </StyleProvider>
    );
  }
}
