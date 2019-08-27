import React from 'react';
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
} from 'native-base';

class HomeScreen extends React.Component {

  componentDidMount() {
    console.log('Home screen!');
  }

  render() {
    const { openDrawer } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={() => openDrawer()} transparent>
              <Icon active name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
      
        </Content>
      </Container>
    );
  }
};

export default HomeScreen;
