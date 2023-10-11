import React, { Component, Fragment, cloneElement, useEffect, useState } from "react";
import CustomHeader from "../components/CustomHeader";
import {
  Text,
  TouchableOpacity,
} from "react-native";

const IOTScreen = (props) => {
  const { route } = props;
  const { params } = route;

  useEffect(() => {
  }, []);

  const cloneActionHeader = (cloneElements) => {
    return cloneElement(cloneElements, {
        actionHeader: (
        <TouchableOpacity
          style={{ width: 40, alignItems: "center" }}
          onPress={() => {console.log("test"); }}
        >
          <Text>เพิ่ม</Text>
        </TouchableOpacity>
      ),
    });
  };
  return (
    <Fragment>
      {cloneActionHeader(
        <CustomHeader
          title={params?.namePage || ""}
          isGoBack
          isOption
          {...props}
        />
      )}
    </Fragment>
  );
};
export default IOTScreen;
