/*
 <CustomButtom
    Openfunction={() => this.run()}
    font_size={this.props.font_size_XL}
    asset_colors={this.props.asset.colors.White}
    colors_Orange={this.props.colors_Orange} />
*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons/faSquareCheck";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";
library.add(fab, faSquareCheck, faMugSaucer);
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import { Text } from "native-base";

export default function CustomButtom(props) {
  return (
    <LinearGradient
      style={{
        borderRadius: 10,
        width: "50%",
      }}
      colors={props.colors_Orange}
    >
      <TouchableOpacity
        style={{
          // height: '10%',
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          props.Openfunction();
        }}
      >
        <Text style={{ fontSize: props.font_size, color: props.asset_colors }}>
          ตกลง
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
