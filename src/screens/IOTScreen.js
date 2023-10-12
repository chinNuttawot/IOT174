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
import ModalPicker from "../components/ModalPicker.component";

const IOTScreen = (props) => {
  const { route } = props;
  const { params } = route;
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [nameDB, setNameDB] = useState("");

  useEffect(() => {
    start();
  }, []);

  const start = () => {
    try {
      setRefreshing(true);
      getData();
    } finally {
      setRefreshing(false);
    }
  };
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
  };
  const delItem = async ({ index }) => {
    let dataUpdate = [];
    dataUpdate = data.filter((vItem, kItem) => kItem !== index);
    await updateSwitchIot(nameDB, dataUpdate);
    getData();
  };
  const onAddItem = async (params) => {
    let myItem = [...data];
    myItem = [...myItem, ...[params]];
    await updateSwitchIot(nameDB, myItem);
    getData();
  };
  const cloneActionHeader = (cloneElements) => {
    return cloneElement(cloneElements, {
      actionHeader: (
        <TouchableOpacity
          style={{ width: 40, alignItems: "center" }}
          onPress={() => {
            setOpenModal(true);
          }}
        >
          <Text>เพิ่ม</Text>
        </TouchableOpacity>
      ),
    });
  };
  const onRefresh = () => {
    try {
      setRefreshing(true);
      getData();
    } finally {
      setRefreshing(false);
    }
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
      <ModalPicker
        isOpen={openModal}
        onClose={(isOpen) => setOpenModal(isOpen)}
        onChange={onAddItem}
      />
      <FlatList
        data={data}
        onRefresh={onRefresh}
        refreshing={refreshing}
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
            <Text style={{ width: 130 }}>{item.roomName}</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => update({ item, index })}
                style={{ marginRight: 40 }}
              >
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
              <TouchableOpacity onPress={() => delItem({ index })}>
                <Ionicons name={"delete"} size={25} color={theme.BLACK_COLOR} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </Fragment>
  );
};
export default IOTScreen;
