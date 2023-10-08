import React, { Component, Fragment } from "react";
import { connect, useSelector } from "react-redux";
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
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { library, text } from "@fortawesome/fontawesome-svg-core";
import { faLessThanEqual, fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import API from "../providers/API";
import {
  addDataStore,
  onValue,
  getDataItems,
  getTokensItems,
} from "../../firebase";
import moment from "moment";
import format from "../core/Formatdate";
library.add(fas, far);
class OtherAddData extends Component {
  constructor(props) {
    super(props);
    console.log("[OtherAddData]");
    this.state = {
      loader_Visible: false,
      itemValue: "",
      itemKey: "",
      sendToken: [],
    };
  }

  componentDidMount() {
    this.getDataFireBase();
  }

  getDataFireBase = () => {
    this.setState({ loader_Visible: true }, async () => {
      const nameDB = await AsyncStorage.getItem("nameDB");
      const isgetTokensItems = await getTokensItems(nameDB);
      await onValue(isgetTokensItems, async (res) => {
        this.setState({ sendToken: res.val(), loader_Visible: false });
      });
    });
  };

  addValue = () => {
    this.setState({ loader_Visible: true }, async () => {
      const nameDB = await AsyncStorage.getItem("nameDB");
      if (this.state.itemKey.length == 0 || this.state.itemValue.length == 0) {
        alert("กรอกข้อมูลให้ครบถ้วน");
        this.setState({ loader_Visible: false });
        return;
      }
      const obj = {
        name: this.state.itemKey,
        amount: this.state.itemValue,
        createDate: moment().format(format.datetime),
        updateAt: moment().format(format.datetime),
      };
      await addDataStore(nameDB, obj);
      await _.map(this.state.sendToken, async (v, k) => {
        await API.post(
          "",
          {
            to: v,
            title: "มีการเพิ่มสินค้า",
            body: `เพิ่ม ${this.state.itemKey} จำนวน ${this.state.itemValue}`,
          },
          ""
        );
      });
      await this.setState({
        itemValue: "",
        itemKey: "",
        loader_Visible: false,
      });
      this.props.navigation.goBack();
    });
  };

  render() {
    const Colors_main = this.props.colors_Orange;
    this.item = this.state.list_inputField;
    return (
      <Fragment>
        <CustomHeader
          background_Color={this.props.asset.colors.bgClassRoom}
          goBack={() => this.props.navigation.goBack()}
          goto={() => this.addValue()}
          font_color={this.props.asset.colors.White}
          font_size={this.props.font_size_L2}
          mainColor={Colors_main}
          title={this.props.route.params.Namepage}
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
            <ScrollView>
              <KeyboardAvoidingView
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                behavior={Platform.OS === "ios" ? "height" : null}
              >
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: hp("5%"),
                  }}
                >
                  <View
                    style={{ justifyContent: "center", flexDirection: "row" }}
                  >
                    <TextInput
                      style={styles.inputField}
                      value={this.state.itemKey}
                      onChangeText={(itemKey) => {
                        this.setState({ itemKey });
                      }}
                      placeholder={"ชื่อสินค้า"}
                    />
                    <TextInput
                      style={styles.inputField}
                      keyboardType="numeric"
                      onChangeText={(itemValue) => {
                        this.setState({ itemValue });
                      }}
                      value={this.state.itemValue}
                      placeholder={"จำนวนสินค้า"}
                    />
                  </View>
                </View>
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </View>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  text: (color) => ({
    fontSize: 18,
    color: color,
    marginTop: 10,
    marginLeft: 10,
  }),
  textError: (color) => ({
    fontSize: 20,
    color: color,
    padding: 20,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  }),
  inputField: {
    width: wp("35%"),
    height: hp("6%"),
    backgroundColor: "#ffffff",
    borderRadius: 5,
    borderColor: "#000000",
    borderWidth: 1,
    marginRight: hp("2%"),
    marginBottom: hp("2%"),
  },
  btn_login: {
    width: wp("90%"),
    height: hp("8%"),
    backgroundColor: "#00bfff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "##1e90ff",
    marginBottom: hp("2%"),
  },
  textWarning: (fontSize) => ({
    fontSize: fontSize,
    color: "#ff0000",
    width: wp("90%"),
    textAlign: "left",
    marginBottom: hp("2%"),
  }),
});
const mapStateToProps = (state) => state.GlobalReducer;
export default connect(mapStateToProps)(OtherAddData);
