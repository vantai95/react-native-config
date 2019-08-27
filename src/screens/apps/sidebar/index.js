import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";

import {
  DRAWER_COVER,
  DRAWER_IMAGE
} from "../../../constants/config";

import styles from "./styles";
import { datas } from "../../../navigation/navs/admin";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
          <Image source={DRAWER_COVER} style={styles.drawerCover} />
          {/* <Image square style={styles.drawerImage} source={DRAWER_IMAGE} /> */}
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem button noBorder onPress={() => navigate(data.route)}>
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={styles.icon}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {
                  data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text style={styles.badgeText}>
                        {`${data.types} Types`}
                      </Text>
                    </Badge>
                  </Right>
                }
              </ListItem>
            }
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
