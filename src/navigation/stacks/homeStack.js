
import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import * as Components from "../../components";
import HomeScreen from "../../screens/apps/homes/home";
import I18n from "../../i18n/i18n";

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    {
        headerMode: "none"
    }
);

HomeStack.navigationOptions = {
    tabBarLabel: I18n.t('TAB_home'),
    tabBarIcon: ({ focused }) => (
        <Components.TabBarIcon
            focused={focused}
            name={
                Platform.OS === "ios"
                    ? `ios-information-circle${focused ? "" : "-outline"}`
                    : "md-information-circle"
            }
        />
    ),
};

export default HomeStack;
