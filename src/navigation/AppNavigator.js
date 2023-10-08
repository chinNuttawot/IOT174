import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import buttomTabNavigator from "./buttomTabNavigator";
import Register from "../screens/Register";
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoad: AuthLoadingScreen,
      Register: Register,
      MainMenu: buttomTabNavigator,
    },
    {
      initialRouteName: "AuthLoad",
      headerMode: "none",
      mode: "modal",
      transparentCard: true,
      cardStyle: {
        backgroundColor: "transparent",
        opacity: 1,
      },
    }
  )
);
