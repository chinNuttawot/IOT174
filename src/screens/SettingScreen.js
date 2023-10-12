import React, {
  Component,
  Fragment,
  cloneElement,
  useEffect,
  useState,
} from "react";
import CustomHeader from "../components/CustomHeader";
import { Text, TouchableOpacity, View } from "react-native";

const SettingScreen = (props) => {
  const { route } = props;
  const { params } = route;

  useEffect(() => {}, []);

  return (
    <Fragment>
      <CustomHeader
        title={params?.namePage || "ตั้งต่า"}
        {...props}
      />
      <View style={{alignSelf: "center", justifyContent: "center", height: 400}}>
        <Text>ยังไม่พร้อมใช้งาน</Text>
      </View>
    </Fragment>
  );
};
export default SettingScreen;
