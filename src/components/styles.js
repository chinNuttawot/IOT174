import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import theme from "../core/theme.style";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  textInput: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    // justifyContent: "center",
    width: windowWidth,
    // height: windowHeight,
  },
  addItem: {
    margin: 10,
    alignSelf: "flex-end",
    padding: 10,
    width: 100,
    height: 50,
    backgroundColor: theme.GREEN_COLOR,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  imageButton: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(166, 186, 184, 0.25)",
    borderRadius: 5,
    marginHorizontal: 2,
  },
  colorsBlack: {
    color: theme.M_GRAY_500,
  },
  input: {
    width: windowWidth / 2,
    height: 50,
    backgroundColor: theme.LIGHT_GREY_COLOR_3,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-around",
    padding: 10,
    margin: 12,
    borderRadius: 10,
    borderColor: theme.LIGHT_GREY_COLOR_1,
    shadowColor: theme.BLACK_COLOR,
    shadowOffset: {
      width: 4,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.84,
    elevation: 5,
  },
  marginLeft: (marginLeft = 0) => ({
    marginLeft,
  }),
  marginBottom0: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  text: {},
  IconCheck: {
    color: theme.LIGHT_GREEN_COLOR,
    style: {
      position: "absolute",
      top: 15,
      left: 15,
    },
  },
  IconAttachmentForModal: (color = theme.LIGHT_GREEN_COLOR) => ({
    color,
    style: {
      position: "absolute",
      left: 5,
    },
  }),
  option2: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  marginBottom: { marginBottom: 20 },
  imageRow: {
    width: windowWidth - 20 * 2,
    height: 100,
    resizeMode: "contain",
    backgroundColor: "#fff",
  },
  styleInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: theme.BORDER_RADIUS,
    backgroundColor: theme.WHITE_COLOR,
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "rgba(166, 186, 184, 0.25)",
  },
  modalView: {
    width: "100%",
    maxHeight: "90%",
    backgroundColor: theme.WHITE_COLOR,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 28,
    alignItems: "center",
    shadowColor: theme.BLACK_COLOR,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: windowWidth / 1.25,
    marginBottom: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textColorWhite: { color: theme.WHITE_COLOR },
  buttonClose: {},
  textStyle: {},
  modalText: {
    height: 24,
    alignItems: "center",
    marginHorizontal: 16,
  },
  modalViewTitle: {
    width: "100%",
    marginBottom: 8,
  },
  title: {
    color: theme.M_GRAY_900,
  },
  menuList: {
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 16,
  },
  modalViewContent: { width: "100%" },
});

export default styles;
