import React, { Component, Fragment } from "react";
import { connect, useSelector } from "react-redux";
import * as con from "../../firebase";
import { ImageBackground, View } from "react-native";
import * as Device from "expo-device";
import CustomButtom from "../components/CustomButtom";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const Class = (props) => {
  const { route, navigation } = props;
  const { asset, styleViewAuth, font_size_XL, colors_Orange } = useSelector(
    (state) => state.GlobalReducer
  );

  useEffect(() => {
    run();
  }, []);

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
      />
    </Fragment>
  );
};
export default Class;
