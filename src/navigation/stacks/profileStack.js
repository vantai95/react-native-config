import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import * as Components from "../../components";
import ProfileScreen from "../../screens/apps/profiles/profile";
import I18n from "../../i18n/i18n";

const ProfileStack = createStackNavigator(
  {
      Profile: ProfileScreen,
  },
  {
      headerMode: "none"
  }
);

ProfileStack.navigationOptions = {
  tabBarLabel: I18n.t('TAB_profile'),
  tabBarIcon: ({ focused }) => (
      <Components.TabBarIcon
          focused={focused}
          name={Platform.OS === "ios" ? "ios-options" : "md-options"}
      />
  ),
};

export default ProfileStack;
