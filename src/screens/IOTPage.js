import React, { Component, Fragment } from "react";
import { connect, useSelector } from "react-redux";
import CustomHeader from "../components/CustomHeader";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { EventRegister } from "react-native-event-listeners";
import _, { divide } from "lodash";
import { CardItem, Left, Right } from "native-base";
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
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Spinner from "react-native-loading-spinner-overlay";
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
import theme from "../core/theme.style";
import dataMenu from "../core/DataMenu";
library.add(fas, far);
class IOTPage extends Component {
  constructor(props) {
    super(props);
    console.log("[IOTPage]");
    this.state = {
      loader_Visible: false,
      itemValue: "",
      itemKey: "",
      sendToken: [],
    };
  }

  render() {
    const Colors_main = this.props.colors_Orange;
    this.item = this.state.list_inputField;
    return (
      <Fragment>
        <CustomHeader
          background_Color={this.props.asset.colors.bgClassRoom}
          goBack={() => this.props.navigation.goBack()}
          //   goto={() => this.addValue()}
          font_color={this.props.asset.colors.White}
          font_size={this.props.font_size_L2}
          mainColor={Colors_main}
          title={this.props.route?.params?.Namepage || ""}
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
            <View style={this.props.ViewMainShow}>
              <FlatList
                style={styles.list}
                contentContainerStyle={styles.listContainer}
                data={dataMenu.dataMenuIOT}
                keyExtractor={(item) => {
                  return item.id;
                }}
                renderItem={({ item }) => {
                  return (
                    <View style={{ justifyContent: "center" }}>
                      <View>
                        <TouchableOpacity
                          style={{
                            flexDirection: "row",
                            padding: 25,
                            borderRadius: 20,
                            backgroundColor: this.props.asset.colors.DarkblueV2,
                          }}
                          onPress={() => {
                            item.goto && this.goto(item);
                          }}
                        >
                          <Left>
                            <View>
                              <Text
                                style={styles.text(
                                  item.size,
                                  this.props.asset.colors.White
                                )}
                              >
                                {item.name}
                              </Text>
                            </View>
                          </Left>
                          <Right>
                            <AntDesign
                              name={item.icon}
                              size={item.size}
                              color={this.props.asset.colors.White}
                            />
                          </Right>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  text: (color) => ({
    fontSize: 18,
    color: "#fff",
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
  textVersion: (color) => ({
    fontSize: 15,
    color: color,
  }),
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
export default connect(mapStateToProps)(IOTPage);
