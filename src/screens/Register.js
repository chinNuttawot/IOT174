import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as con from "../../firebase";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Device from "expo-device";
import CustomButtom from "../components/CustomButtom";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isnameDB: "",
    };
    console.log("[Register]");
  }

  run = async () => {
    await AsyncStorage.setItem("nameDB", this.state.isnameDB.toString());
    const nameDB = await AsyncStorage.getItem("nameDB");
    await con.dateLogin(nameDB, `${Device.modelName} ${Device.deviceName}`);
    await this.props.navigation.navigate("MainMenu");
  };

  render() {
    return (
      <Fragment>
        <ImageBackground
          style={{ flex: 1 }}
          source={this.props.asset.images.splash}
          resizeMode="contain"
        >
          <View style={this.props.styleViewAuth[0]}>
            <View style={this.props.styleViewAuth[1]}>
              <KeyboardAvoidingView
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: wp(50),
                  height: hp(5),
                  borderRadius: 10,
                  backgroundColor: "rgba(116, 116, 116, 0.3)",
                }}
                behavior={Platform.OS === "ios" ? "height" : null}
              >
                <TextInput
                  style={styles.input(this.props.font_size_L)}
                  placeholder={"ใส่ชื่อบ้าน หรือ เลขที่บ้าน"}
                  placeholderTextColor="#000"
                  onChangeText={(isnameDB) => this.setState({ isnameDB })}
                />
              </KeyboardAvoidingView>
              <View style={{ marginTop: 10 }} />
              <CustomButtom
                Openfunction={() => this.run()}
                font_size={this.props.font_size_L}
                asset_colors={this.props.asset.colors.White}
                colors_Orange={this.props.colors_Orange}
              />
            </View>
          </View>
        </ImageBackground>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  text: (fontSize) => ({
    fontSize: fontSize,
    color: "#fff",
  }),
  textVersion: (color) => ({
    fontSize: 15,
    color: color,
  }),
  list: (color) => ({
    width: wp(95),
    marginTop: "2%",
    backgroundColor: color,
    borderRadius: 20,
  }),
  input: (fontSize) => ({
    // width: wp(90),
    // color: '#fff',
    fontSize: fontSize,
    borderBottomWidth: 1,
    // borderColor: 'rgba(116, 116, 116, 0.3)',
  }),
});

const mapStateToProps = (state) => state.GlobalReducer;
export default connect(mapStateToProps)(Register);
