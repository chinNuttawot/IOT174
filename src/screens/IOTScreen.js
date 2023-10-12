import React, {
  Component,
  Fragment,
  cloneElement,
  useEffect,
  useState,
} from "react";
import CustomHeader from "../components/CustomHeader";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getSwitchIot, updateSwitchIot } from "../../firebase";
import theme from "../core/theme.style";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";

const IOTScreen = (props) => {
  const { route } = props;
  const { params } = route;
  const [data, setData] = useState([]);
  const [nameDB, setNameDB] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const nameDB = await AsyncStorage.getItem("nameDB");
    setNameDB(nameDB);
    const res = await getSwitchIot(nameDB);
    setData(res);
  };
  const update = async ({ item, index }) => {
    let dataUpdate = [];
    item = {
      ...item,
      isPower: !item.isPower,
    };
    dataUpdate = data.map((vItem, kItem) => {
      if (index === kItem) {
        vItem = {
          ...vItem,
          ...item,
        };
      }
      return vItem;
    });
    await updateSwitchIot(nameDB, dataUpdate);
    getData();
    // setData(dataUpdate)
  };
  const cloneActionHeader = (cloneElements) => {
    return cloneElement(cloneElements, {
      actionHeader: (
        <TouchableOpacity
          style={{ width: 40, alignItems: "center" }}
          onPress={() => {
            console.log("test");
          }}
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
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View
            style={{
              height: 60,
              width: "100%",
              marginBottom: 5,
              marginTop: 5,
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: theme.LIGHT_GREY_COLOR_3,
            }}
          >
            <Text>{item.roomName}</Text>
            <TouchableOpacity onPress={() => update({ item, index })}>
              <Ionicons
                name={item.isPower ? "led-on" : "led-off"}
                size={25}
                color={
                  item.isPower
                    ? theme.LIGHT_GREEN_COLOR_3
                    : theme.LIGHT_RED_COLOR
                }
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </Fragment>
  );
};
export default IOTScreen;
