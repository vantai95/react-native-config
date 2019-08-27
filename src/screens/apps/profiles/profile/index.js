import React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";

import toasts from "../../../../utils/toast";
import I18n from "../../../../i18n/i18n";

class SettingScreen extends React.Component {

  // logoutBtnPress = () => {
  //     toasts.success(I18n.t("LOGOUT_success"));
  //     this.props.navigation.navigate("Login");
  // }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Settings</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Button full danger onPress={() => navigate('Authenticate')}>
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
};

export default SettingScreen;
