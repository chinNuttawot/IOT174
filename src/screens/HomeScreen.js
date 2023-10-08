import React, { Component, Fragment, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import CustomHeader from "../components/CustomHeader";
import { EventRegister } from "react-native-event-listeners";
import _, { divide } from "lodash";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  ImageBackground,
  TouchableOpacity,
  View,
  Modal,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Label,
  Card,
  CardItem,
  Textarea,
  Left,
  Right,
  Thumbnail,
  Body,
} from "native-base";
import Spinner from "react-native-loading-spinner-overlay";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { library, text } from "@fortawesome/fontawesome-svg-core";
import { faLessThanEqual, fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import {
  onValue,
  getDataItems,
  getTokensItems,
  delDataStore,
} from "../../firebase";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";
import { async } from "@firebase/util";
import API from "../providers/API";
import theme from "../core/theme.style";
import styles from "./style";
library.add(fas, far);

const Home = (props) => {
  const state = useSelector((state) => state.GlobalReducer);
  const dispatch = useDispatch();
  const [loaderVisible, setlLoadervisible] = useState(false);
  const [data, setData] = useState([]);
  const [dataKeyUpdate, setDataKeyUpdate] = useState([]);
  const [datakeyword, setDatakeyword] = useState([]);
  const [sendToken, setSendToken] = useState([]);
  useEffect(() => {
    console.log("[HomeScreen]");
  }, []);
  getDataFireBase = () => {
    this.setState({ loader_Visible: true }, async () => {
      const nameDB = await AsyncStorage.getItem("nameDB");
      const isgetDataItems = await getDataItems(nameDB);
      const isgetTokensItems = await getTokensItems(nameDB);
      await onValue(isgetDataItems, async (res) => {
        await this.setState({ data: [], dataKeyUpdate: [] });
        await _.map(res.val(), async (v, k) => {
          await this.state.dataKeyUpdate.push(k);
          await this.state.data.push(v);
        });
        await onValue(isgetTokensItems, async (res) => {
          this.setState({ sendToken: res.val() });
        });
        await this.setState({
          loader_Visible: false,
        });
      });
    });
  };

  goto = (item, index) => {
    this.props.navigation.navigate("EditData", {
      data: item.item,
      key: this.state.dataKeyUpdate[item.index],
    });
  };

  del = async (item) => {
    this.setState({ loader_Visible: true }, async () => {
      const nameDB = await AsyncStorage.getItem("nameDB");
      await _.map(this.state.sendToken, async (v, k) => {
        await API.post(
          "",
          {
            to: v,
            title: "มีการลบสินค้า",
            body: `ลบ ${item.item.name}`,
          },
          ""
        ).then(async (res) => {});
      });
      await delDataStore(nameDB, this.state.dataKeyUpdate[item.index]);
      this.setState({ loader_Visible: false });
    });
  };

  onChangeText = async (data, keyword) => {
    if (keyword === "") {
      this.setState({ datakeyword: "" });
    } else {
      const data_keyword = [];
      await _.map(data, (item, i) => {
        let re_check = new RegExp(`${keyword}`);
        let result_check_1 = re_check.test(`${item.name}`);
        if (result_check_1 === true) {
          data_keyword.push(item);
        }
      });
      this.setState({ datakeyword: data_keyword });
    }
  };
  return (
    <Fragment>
      <CustomHeader
        background_Color={this.props.asset.colors.bgClassRoom}
        font_color={this.props.asset.colors.White}
        font_size={this.props.font_size_XL}
        mainColor={Colors_main}
      />
      <Spinner
        visible={this.state.loader_Visible}
        textContent={"กำลังโหลดข้อมูล..."}
        textStyle={{ color: Colors_main[1] }}
        // overlayColor='rgba(167, 213, 240, 0.8)'
        color={Colors_main[1]}
      />
      <View style={{ flex: 1 }}>
        <View style={this.props.BackgroundColor}>
          <View style={{ marginTop: 10, alignItems: "center" }}>
            <KeyboardAvoidingView
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 300,
                height: 50,
                borderRadius: 10,
                backgroundColor: "rgba(116, 116, 116, 0.3)",
              }}
              behavior={Platform.OS === "ios" ? "height" : null}
            >
              <TextInput
                style={styles.input}
                placeholder={">>> ใส่คำที่ต้องการค้นหา <<<"}
                placeholderTextColor="#000"
                onChangeText={(val) => this.onChangeText(this.state.data, val)}
              />
            </KeyboardAvoidingView>
          </View>
          <SwipeListView
            style={styles.list(this.props.asset.colors.DarkblueV2)}
            data={
              this.state.datakeyword ? this.state.datakeyword : this.state.data
            }
            renderItem={(data, rowMap) => (
              <View
                style={{
                  backgroundColor: theme.LIGHT_GREEN_COLOR_5,
                }}
              >
                <TouchableOpacity
                  style={{ flexDirection: "row", padding: 5 }}
                  onPress={() => {
                    this.goto(data, rowMap);
                  }}
                >
                  <Left>
                    <View>
                      <Text
                        style={styles.text(
                          this.props.font_size_L3,
                          this.props.asset.colors.DarkblueV2
                        )}
                      >{`${data.item.name ? data.item.name : "cc"}`}</Text>
                    </View>
                  </Left>
                  <Right
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Text
                      style={styles.text(
                        this.props.font_size_L3,
                        this.props.asset.colors.DarkblueV2
                      )}
                    >{`${data.item.amount ? data.item.amount : "xx"}  `}</Text>
                    <AntDesign
                      name={"edit"}
                      size={this.props.font_size_L}
                      color={this.props.asset.colors.DarkblueV2}
                    />
                  </Right>
                </TouchableOpacity>
              </View>
            )}
            renderHiddenItem={(data, rowMap) => (
              <View style={{ alignItems: "flex-end" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    padding: 15,
                    backgroundColor: "red",
                  }}
                  onPress={() => {
                    this.del(data);
                  }}
                >
                  <Text
                    style={styles.text(
                      theme.FONT_SIZE_M,
                      this.props.asset.colors.White
                    )}
                  >
                    ลบ
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            // leftOpenValue={60}
            rightOpenValue={-60}
          />
        </View>
      </View>
    </Fragment>
  );
};
export default Home;
