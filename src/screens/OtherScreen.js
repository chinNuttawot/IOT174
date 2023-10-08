import React, { Component, Fragment } from "react";
import { connect, useSelector } from "react-redux";
import CustomHeader from "../components/CustomHeader";
import { EventRegister } from "react-native-event-listeners";
import { Ionicons, AntDesign } from "@expo/vector-icons";
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
} from "react-native";
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
import dataMenu from "../core/DataMenu";
library.add(fas, far);
class Other extends Component {
  constructor(props) {
    super(props);
    console.log("[OtherScreen]");
    this.state = {
      loader_Visible: false,
    };
  }

  goto = (item) => {
    this.props.navigation.navigate(item.goto, {
      Namepage: item.name,
    });
  };

  render() {
    const Colors_main = this.props.colors_Orange;
    return (
      <Fragment>
        <CustomHeader
          background_Color={this.props.asset.colors.bgClassRoom}
          font_color={this.props.asset.colors.White}
          font_size={this.props.font_size_XL}
          mainColor={Colors_main}
          // title={"อื่นๆ"}
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
                data={dataMenu.dataMenuOther}
                keyExtractor={(item) => {
                  return item.id;
                }}
                renderItem={({ item }) => {
                  return (
                    <View style={{ justifyContent: "center" }}>
                      <TouchableOpacity
                        style={{
                          flexDirection: "row",
                          padding: 25,
                          borderRadius: 20,
                          backgroundColor: this.props.asset.colors.DarkblueV2,
                        }}
                        onPress={() => {
                          this.goto(item);
                        }}
                      >
                        <Left>
                          <View>
                            <Text style={styles.text(this.props.font_size_L2)}>
                              {item.name}
                            </Text>
                          </View>
                        </Left>
                        <Right>
                          <AntDesign
                            name={item.icon}
                            size={this.props.font_size_L2}
                            color={this.props.asset.colors.White}
                          />
                        </Right>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
              <View>
                <Text
                  style={styles.textVersion(this.props.asset.colors.DarkblueV2)}
                >
                  {"ver " + this.props.current_version}
                </Text>
              </View>
            </View>
          </View>
        </View>
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
  list: {
    paddingHorizontal: 0,
    width: wp(95),
    marginTop: hp(0),
  },
  listContainer: {
    width: wp(95),
  },
});
const mapStateToProps = (state) => state.GlobalReducer;
export default connect(mapStateToProps)(Other);
