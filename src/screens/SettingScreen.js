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
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { library, text } from "@fortawesome/fontawesome-svg-core";
import { faLessThanEqual, fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);
class Setting extends Component {
  constructor(props) {
    super(props);
    console.log("[Setting]");
    this.state = {
      loader_Visible: false,
      open_modal_noti: false,
    };
  }

  render() {
    const Colors_main = this.props.colors_ฟ้า;
    return (
      <Fragment>
        <CustomHeader
          background_Color={this.props.asset.colors.bgClassRoom}
          font_color={this.props.asset.colors.White}
          font_size={this.props.font_size_XL}
          mainColor={Colors_main}
          title={"ตั้งค่า"}
        />
        <Spinner
          visible={this.state.loader_Visible}
          textContent={"กำลังโหลดข้อมูล..."}
          textStyle={{ color: Colors_main[1] }}
          // overlayColor='rgba(167, 213, 240, 0.8)'
          color={Colors_main[1]}
        />
        <ImageBackground
          style={{ flex: 1 }}
          source={this.props.asset.images.splash}
          resizeMode="contain"
        >
          <View
            style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          >
            <ScrollView>
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  marginTop: 10,
                  alignItems: "center",
                  flexDirection: "column",
                }}
              ></View>
            </ScrollView>
          </View>
        </ImageBackground>
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
});
const mapStateToProps = (state) => state.GlobalReducer;
export default connect(mapStateToProps)(Setting);
