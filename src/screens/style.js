import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: (fontSize, color) => ({
    fontSize: fontSize,
    color: color,
  }),
  textVersion: (color) => ({
    fontSize: 15,
    color: color,
  }),
  list: (color) => ({
    // width: wp(95),
    marginTop: "2%",
    // backgroundColor: color,
    // borderRadius: 20,
  }),
  input: (fontSize) => ({
    width: wp(90),
    height: hp(5),
    color: "#fff",
    fontSize: fontSize,
    borderBottomWidth: 1,
    // borderColor: 'rgba(116, 116, 116, 0.3)',
  }),
});

export default styles;
