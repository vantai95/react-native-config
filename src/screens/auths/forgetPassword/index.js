import React from "react";
import {
  Container,
  Button,
  Item as FormItem,
  Input,
  Form,
  Text,
  Content,
  Label,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Title
} from "native-base";
import { Keyboard } from "react-native";
import toasts from "../../../utils/toast";
import I18n from "../../../i18n/i18n";

import styles from "./styles";

class ForgetPasswordScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",

      warningEmail: false
    };
  }

  sendBtnPress = () => {

    // _ hide keyboard
    Keyboard.dismiss();

    // _ check invalid text input
    if (this.checkTextInput()) {

      // _ show toast
      toasts.success(I18n.t("FORGET_PASSWORD_sendMailSuccess"));

      // _ reset state
      this.setState({ email: "" });
    }
  }

  checkTextInput = () => {
    // _ get value state
    const { email } = this.state;

    // _ get operator results
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const resultEmail = reg.test(email);

    // _ set warning input
    this.setState({ warningEmail: resultEmail ? false : true });

    // _ if false: show toast
    if (!resultEmail) {
      toasts.warning(I18n.t("TOAST_CONTENT_invalidEmail"));
      return false;
    }

    return true;
  }

  render() {
    const { goBack } = this.props.navigation;
    const { email } = this.state;
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => { goBack() }}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{I18n.t("FORGET_PASSWORD_title")}</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Form>
            <FormItem last error={this.state.warningEmail}>
              <Input
                keyboardType="email-address"
                placeholder={I18n.t("FORGET_PASSWORD_holderEmail")}
                placeholderTextColor="gray"
                style={[styles.textColor]}
                returnKeyType="done"
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => this.setState({ email: text })}
              />
              <Icon
                active
                name="x"
                style={styles.icon}
                type="Feather"
                onPress={() => this.setState({ email: "" })}
              />
            </FormItem>
            <Button
              full
              style={styles.btn}
              onPress={() => this.sendBtnPress()}
            >
              <Text style={styles.textBold}>{I18n.t("FORGET_PASSWORD_button")}</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  };
};

export default ForgetPasswordScreen;