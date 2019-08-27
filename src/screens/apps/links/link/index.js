import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
} from "native-base";

class LinkScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Links</Title>
          </Body>
          <Right />
        </Header>
        <Content>

        </Content>
      </Container>
    );
  }
}

export default LinkScreen;
