import * as React from "react";
import { Button, Text, View, Animated, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/AntDesign";
import { connect, useSelector } from "react-redux";
import HomeScreen from "../screens/HomeScreen";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import styles from "./stylesButtomtabRefactor";
import theme from "../core/theme.style";
import IOTScreen from "../screens/IOTScreen";
const MainStack = createNativeStackNavigator();
function HomeStackScreen({ navigation, goBack }) {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="ButtomTab" component={ButtomTab} />
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="IOT" component={IOTScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();
function ButtomTab(props) {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = "";
    let text = "";
    switch (routeName) {
      case "บ้านของฉัน":
        icon = "home";
        text = "บ้านของฉัน";
        break;
      case "ตั้งค่า":
        icon = "setting";
        text = "ตั้งค่า";
        break;
    }

    return (
      <>
        <View
          style={{
            flexDirection: "row",
            maxWidth: 30,
          }}
        >
          <Ionicons
            name={icon}
            size={30}
            color={
              routeName === selectedTab ? theme.GREEN_COLOR : theme.WHITE_COLOR
            }
          />
        </View>
        <Text
          style={{
            fontSize: theme.FONT_SIZE_XS,
            color:
              routeName === selectedTab ? theme.GREEN_COLOR : theme.WHITE_COLOR,
          }}
        >
          {text}
        </Text>
      </>
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };
  return (
    <CurvedBottomBar.Navigator
      style={styles.bottomBar}
      type="DOWN"
      strokeWidth={1}
      strokeColor={theme.LIGHT_GREEN_COLOR_2}
      height={70}
      circleWidth={60}
      bgColor={theme.LIGHT_GREEN_COLOR_6}
      initialRouteName="Dashboard"
      borderTopLeftRight
      renderCircle={({ selectedTab, navigate }) => (
        <Animated.View style={styles.btnCircle}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
            }}
            onPress={() => {
              props.navigation.navigate("IOT", { namePage: "IOT" });
            }}
          >
            <Text
              style={{ color: theme.WHITE_COLOR, fontSize: theme.FONT_SIZE_L }}
            >
              IOT
            </Text>
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
    >
      <Tab.Screen
        name="บ้านของฉัน"
        position="LEFT"
        options={({ navigation }) => ({
          headerShown: false,
        })}
        component={HomeScreen}
      />
      <Tab.Screen
        name="ตั้งค่า"
        position="RIGHT"
        options={({ navigation }) => ({
          headerShown: false,
        })}
        component={HomeScreen}
      />
    </CurvedBottomBar.Navigator>
  );
}
const mapStateToProps = (state) => state.GlobalReducer;
export default connect(mapStateToProps)(HomeStackScreen);
