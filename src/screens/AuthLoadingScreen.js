import React, { Component, Fragment } from "react";
import { connect, useSelector } from "react-redux";
import * as con from "../../firebase";
import { ImageBackground, View } from "react-native";
import * as Device from "expo-device";
import CustomButtom from "../components/CustomButtom";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Class = (props) => {
  const { route, navigation } = props;
  const { asset, styleViewAuth, font_size_XL, colors_Orange } = useSelector(
    (state) => state.GlobalReducer
  );
  const run = async () => {
    let nameDB = await AsyncStorage.getItem("nameDB");
    if (nameDB) {
      navigation.navigate("MainMenu");
      const Token = await AsyncStorage.getItem("tokenExpo");
      await con.addTokenStore(
        nameDB,
        `${Device.modelName} ${Device.deviceName}`,
        Token
      );
      con.addSwitchIot(nameDB, {Room1: 0})
      return;
    }
    navigation.navigate("Register");
  };
  return (
    <Fragment>
      <ImageBackground
        style={{ flex: 1 }}
        source={asset.images.splash}
        resizeMode="contain"
      >
        <View style={styleViewAuth[0]}>
          <View style={styleViewAuth[1]}>
            <CustomButtom
              Openfunction={run}
              font_size={font_size_XL}
              asset_colors={asset.colors.White}
              colors_Orange={colors_Orange}
            />
          </View>
        </View>
      </ImageBackground>
    </Fragment>
  );
};
export default Class;
