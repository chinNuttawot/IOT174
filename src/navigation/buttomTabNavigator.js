import * as React from "react";
import { Button, Text, View, Animated, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/AntDesign";
import { connect, useSelector } from "react-redux";
import HomeScreen from "../screens/HomeScreen";
import OtherScreen from "../screens/OtherScreen";
import OtherAddData from "../screens/OtherAddDataScreen";
import EditDataScreen from "../screens/EditDataScreen";
import IOTPage from "../screens/IOTPage";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import styles from "./stylesButtomtabRefactor";
import theme from "../core/theme.style";

const MainStack = createNativeStackNavigator();
function HomeStackScreen({ navigation, goBack }) {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="ButtomTab" component={ButtomTab} />
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="EditData" component={EditDataScreen} />
        <MainStack.Screen name="otherMain" component={OtherScreen} />
        <MainStack.Screen name="AddData" component={OtherAddData} />
        <MainStack.Screen name="IOT" component={IOTPage} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();
function ButtomTab(props) {
  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = "";
    let text = "";
    switch (routeName) {
      case "ของใช้ในบ้าน":
        icon = "home";
        text = "ของใช้ในบ้าน";
        break;
      case "อื่นๆ":
        icon = "setting";
        text = "อื่นๆ";
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
  const renderTabBar = ({ routeName, selectedTab, navigate }: any) => {
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
      bgColor={theme.LIGHT_GREEN_COLOR_5}
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
              props.navigation.navigate("IOT", { Namepage: "IOT" });
            }}
          >
            {/* <Ionicons name={"setting"} color={theme.WHITE_COLOR} size={45} /> */}
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
        name="ของใช้ในบ้าน"
        position="LEFT"
        options={({ navigation }) => ({
          headerShown: false,
        })}
        component={HomeScreen}
      />
      <Tab.Screen
        name="อื่นๆ"
        position="RIGHT"
        options={({ navigation }) => ({
          headerShown: false,
        })}
        component={OtherScreen}
      />
    </CurvedBottomBar.Navigator>
  );
}
const mapStateToProps = (state) => state.GlobalReducer;
export default connect(mapStateToProps)(HomeStackScreen);
