import { StyleSheet } from "react-native";
import theme from "../core/theme.style";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomBar: {},
  btnCircle: {
    width: 70,
    height: 70,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.LIGHT_ORANGE_COLOR,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
  },
  btnCircleNoti: {
    width: 25,
    height: 25,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.RED_COLOR,
    shadowColor: theme.LIGHT_RED_COLOR,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 5,
  },
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8E8E8",
    bottom: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "#48CEF6",
  },
  img: {
    width: 30,
    height: 30,
  },
});
export default styles;
