import React from "react";
import {
  Button,
  Item as FormItem,
  Input,
  Form,
  Text,
  Icon,
  Container
} from "native-base";
import {
  Grid,
  Col,
  Row
} from "react-native-easy-grid";
import {
  Keyboard,
  StatusBar,
  View,
  TouchableWithoutFeedback
} from "react-native";

import styles from "./styles";
import toasts from "../../../utils/toast";
import I18n from "../../../i18n/i18n";
import AuthService from "../../../services/authService";

class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",

      warningUsername: false,
      warningPassword: false,

      isHidePassword: true
    };
    this.authService = new AuthService();
  }

  loginBtnPress = () => {

    // _ hide keyboard
    Keyboard.dismiss();

    // _ check invalid text input
    if (this.checkTextInput()) {

      let user = {
        username: this.state.username,
        password: this.state.password
      };

      this.authService.login(user)
        .then((responseJson) => {
          if (responseJson.success) {
            this.props.onSetUser(responseJson.data);
            toasts.success(I18n.t("LOGIN_success"));
            this.props.navigation.navigate("Home");
          }
        })
        .catch((error) => {
          toasts.danger(error);
        })
    }
  }

  checkTextInput = () => {

    // _ get value state
    const {
      username,
      password
    } = this.state;

    // _ get operator results
    const resultUsername = username.length < 6;
    const resultPassword = password.length < 6;

    // _ set warning input
    this.setState({
      warningUsername: resultUsername ? true : false,
      warningPassword: resultPassword ? true : false
    });

    // _ if one of all is true: show toast
    if (resultUsername || resultPassword) {
      toasts.warning(I18n.t("TOAST_CONTENT_lengthLeastSix"));
      return false;
    }

    return true;
  }

  render() {
    const { navigate } = this.props.navigation;
    const { username, password, warningUsername, warningPassword } = this.state;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container style={styles.container}>
          <StatusBar barStyle="light-content" />

          {/* <View style={styles.header}>
            <Text style={styles.headerTitle}>{I18n.t("LOGIN_title")}</Text>
          </View> */}

          <View style={styles.groupInput}>
            <Form>
              <FormItem last error={warningUsername}>
                <Icon
                  active
                  name="user"
                  type="FontAwesome"
                  style={[styles.iconColor]}
                />
                <Input
                  returnKeyType="done"
                  placeholder={I18n.t("LOGIN_holderUsername")}
                  placeholderTextColor="gray"
                  style={[styles.textColor]}
                  autoCapitalize="none"
                  value={username}
                  onChangeText={(text) => this.setState({ username: text })}
                />
                <Icon
                  active
                  name="x"
                  type="Feather"
                  style={[styles.iconColor]}
                  onPress={() => this.setState({ username: "" })}
                />
              </FormItem>
              <FormItem last error={warningPassword}>
                <Icon
                  active
                  name="user"
                  type="FontAwesome"
                  style={[styles.iconColor]}
                />
                <Input
                  returnKeyType="done"
                  autoCapitalize="none"
                  placeholder={I18n.t("LOGIN_holderPassword")}
                  placeholderTextColor="gray"
                  style={[styles.textColor]}
                  value={password}
                  secureTextEntry={this.state.isHidePassword}
                  onChangeText={(text) => this.setState({ password: text })}
                />
                <Icon
                  active
                  name={this.state.isHidePassword ? "eye" : "eye-off"}
                  type="Feather"
                  style={[styles.iconColor]}
                  onPress={() => this.setState({ isHidePassword: !this.state.isHidePassword })}
                />
                <Icon
                  active
                  name="x"
                  type="Feather"
                  style={[styles.iconColor]}
                  onPress={() => this.setState({ password: "" })}
                />
              </FormItem>
            </Form>
            <Grid style={styles.mt15}>
              <Col size={1}>
                <Row size={1} />
              </Col>
              <Col size={1}>
                <Row size={1} style={styles.rowRight}>
                  <Button transparent small dark onPress={() => { navigate("ForgetPassword") }}>
                    <Text style={styles.textColor}>{I18n.t("LOGIN_buttonForgotPassword")}</Text>
                  </Button>
                </Row>
              </Col>
            </Grid>
          </View>

          <View style={styles.groupButton}>
            <Button
              full
              primary
              style={styles.btn}
              onPress={() => this.loginBtnPress()}
            >
              <Text style={styles.textBold}>{I18n.t("LOGIN_title")}</Text>
            </Button>
            <Text style={styles.noteText}>{I18n.t("LOGIN_textOtherAccount")}</Text>
            <Grid>
              <Col size={1}>
                <Button full iconLeft style={styles.btnFacebook}>
                  <Icon
                    active
                    type="FontAwesome"
                    name="facebook-square"
                  />
                  <Text style={styles.textBold}>{I18n.t("LOGIN_buttonFacebook")}</Text>
                </Button>
              </Col>
              <Col size={1}>
                <Button full iconLeft style={styles.btnGoogle}>
                  <Icon
                    active
                    type="FontAwesome"
                    name="google-plus-square"
                  />
                  <Text style={styles.textBold}>{I18n.t("LOGIN_buttonGoogle")}</Text>
                </Button>
              </Col>
            </Grid>
          </View>
        </Container>
      </TouchableWithoutFeedback>
    );
  };
};

export default LoginScreen;