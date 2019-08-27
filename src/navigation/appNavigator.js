import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";

// auth loading
import AuthLoadingContainer from "../containers/authLoading";

// side bar
import SideBar from "../screens/apps/sidebar";

// stack
import AuthStack from "./stacks/authStack";
import HomeStack from "./stacks/homeStack";
import ProfileStack from "./stacks/profileStack";

const AppTab = createBottomTabNavigator({
  HomeStack,
  ProfileStack,
});

const AppDrawer = createDrawerNavigator(
  {
    AppTab
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

/** 
 * Type: AppContainer
 * Content: Root navigation
 ***********************************************/
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingContainer,
    Auth: AuthStack,
    AppDrawer
  },
  {
    initialRouteName: "AuthLoading",
  }
));
