import theme from "./theme.style";

const dataMenu = {};

dataMenu.dataMenuOther = [
  { id: "0", name: "เพิ่มของ", goto: "AddData", icon: "setting" },
];
dataMenu.dataMenuIOT = [
  {
    id: "0",
    name: "เพิ่มปุ่ม",
    goto: "",
    icon: "upload",
    size: theme.FONT_SIZE_XL,
  },
  {
    id: "1",
    name: "ใช้งาน",
    goto: "",
    icon: "dashboard",
    size: theme.FONT_SIZE_XL,
  },
];
export default dataMenu;
