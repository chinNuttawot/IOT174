import {
  Platform,
  SafeAreaView,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { Component, cloneElement } from "react";
import { Text } from "native-base";
import { useSelector } from "react-redux";

export default function CustomHeader(props) {
  const { title, isGoBack, navigation, actionHeader } = props;
  const { asset } = useSelector((state) => state.GlobalReducer);
  const { colors } = asset;
 
  return (
    <SafeAreaView style={{ backgroundColor: colors.DarkblueV3 }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
          height: 50,
        }}
      >
        {isGoBack ? (
          <TouchableOpacity
            style={{ width: 40, alignItems: "center" }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text>กลับ</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 40 }} />
        )}
        <View style={{ width: 100, alignItems: "center" }}>
          <Text>{title}</Text>
        </View>
        {actionHeader ? actionHeader : <View style={{ width: 40 }} />}
      </View>
    </SafeAreaView>
  );
}
