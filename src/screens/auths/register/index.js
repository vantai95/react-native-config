import React from "react";
import {
  Container,
  Button,
  Item as FormItem,
  Input,
  Form,
  Text,
  Content,
  Icon,
} from "native-base";
import { Keyboard } from "react-native";

import styles from "./styles";
import toasts from "../../../utils/toast";
import I18n from "../../../i18n/i18n";

class RegisterScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      username: "",
      password: "",
      confirmPassword: "",

      warningFullname: false,
      warningUsername: false,
      warningPassword: false,
      warningConfirmPassword: false,

      isHidePassword: true,
      isHideConfirmPassword: true
    };
  }

  registerBtnPress = () => {

    // _ hide keyboard
    Keyboard.dismiss();

    // _ check invalid text input
    if (this.checkTextInput()) {
      if (this.checkConfirmPassWord()) {

        //___CODE CALL API REGISTER

        // ****** temporary code ******
        setTimeout(() => {
          // _show toast
          toasts.success(I18n.t("REGISTER_success"));

          // _goback screen
          this.props.navigation.goBack();
        }, 2000);
        // *****************************
      }
    }
  }

  checkConfirmPassWord = () => {
    // _ get value state
    const {
      password,
      confirmPassword
    } = this.state;

    // _ get operator results
    const resultMatch = password != confirmPassword;

    // _ set warning input
    this.setState({ warningConfirmPassword: resultMatch ? true : false });

    // _ if true: show toast
    if (resultMatch) {
      toasts.warning("The confirm password does not match!");
      return false;
    }

    return true;
  }

  checkTextInput = () => {

    // _ get value state
    const {
      fullname,
      username,
      password,
      confirmPassword
    } = this.state;

    // _ get operator results
    const resultFullname = fullname.length < 6;
    const resultUsername = username.length < 6;
    const resultPassword = password.length < 6;
    const resultConfirmPassword = confirmPassword.length < 6;

    // _ set warning input
    this.setState({
      warningFullname: resultFullname ? true : false,
      warningUsername: resultUsername ? true : false,
      warningPassword: resultPassword ? true : false,
      warningConfirmPassword: resultConfirmPassword ? true : false
    });

    // _ if true: set warning input
    if (resultFullname || resultUsername || resultPassword || resultConfirmPassword) {
      toasts.warning(I18n.t("TOAST_CONTENT_lengthLeastSix"));
      return false;
    }

    return true;
  }

  render() {
    const { fullname, username, password, confirmPassword } = this.state;
    return (
      <Container style={styles.container}>
        <Content padder>
          <Form>
            <FormItem last error={this.state.warningFullname}>
              <Input
                returnKeyType="done"
                autoCapitalize="none"
                style={[styles.textColor]}
                placeholderTextColor="gray"
                placeholder={I18n.t("REGISTER_holderFullname")}
                value={fullname}
                onChangeText={(text) => this.setState({ fullname: text })}
              />
              <Icon
                active
                name="x"
                style={styles.icon}
                type="Feather"
                onPress={() => this.setState({ fullname: "" })}
              />
            </FormItem>
            <FormItem last error={this.state.warningUsername}>
              <Input
                returnKeyType="done"
                autoCapitalize="none"
                style={[styles.textColor]}
                placeholderTextColor="gray"
                placeholder={I18n.t("REGISTER_holderUsername")}
                value={username}
                onChangeText={(text) => this.setState({ username: text })}
              />
              <Icon
                active
                name="x"
                style={styles.icon}
                type="Feather"
                onPress={() => this.setState({ username: "" })}
              />
            </FormItem>
            <FormItem last error={this.state.warningPassword}>
              <Input
                returnKeyType="done"
                autoCapitalize="none"
                placeholderTextColor="gray"
                style={[styles.textColor]}
                placeholder={I18n.t("REGISTER_holderPassword")}
                value={password}
                onChangeText={(text) => this.setState({ password: text })}
                secureTextEntry={this.state.isHidePassword}
              />
              <Icon
                active
                type="Feather"
                style={styles.icon}
                value={password}
                name={this.state.isHidePassword ? "eye" : "eye-off"}
                onPress={() => this.setState({ isHidePassword: !this.state.isHidePassword })}
              />
              <Icon
                active
                name="x"
                style={styles.icon}
                type="Feather"
                onPress={() => this.setState({ password: "" })}
              />
            </FormItem>
            <FormItem last error={this.state.warningConfirmPassword}>
              <Input
                returnKeyType="done"
                placeholderTextColor="gray"
                style={[styles.textColor]}
                placeholder={I18n.t("REGISTER_holderConfirmPassword")}
                value={confirmPassword}
                onChangeText={(text) => this.setState({ confirmPassword: text })}
                secureTextEntry={this.state.isHideConfirmPassword}
              />
              <Icon
                active
                type="Feather"
                style={styles.icon}
                name={this.state.isHideConfirmPassword ? "eye" : "eye-off"}
                onPress={() => this.setState({ isHideConfirmPassword: !this.state.isHideConfirmPassword })}
              />
              <Icon
                active
                name="x"
                type="Feather"
                style={styles.icon}
                onPress={() => this.setState({ confirmPassword: "" })}
              />
            </FormItem>
            <Button
              full
              style={styles.btn}
              onPress={() => this.registerBtnPress()}
            >
              <Text style={styles.textBold}>{I18n.t("REGISTER_button")}</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  };
};

export default RegisterScreen;
