import React, { Component, Fragment, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import CustomHeader from "../components/CustomHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  
  useEffect(() => {
    start()
  }, []);

  const start = async () => {
    const nameDB = await AsyncStorage.getItem("nameDB");
    setTitle(nameDB);
  };
  // getDataFireBase = () => {
  //   setState({ loader_Visible: true }, async () => {
  //     const nameDB = await AsyncStorage.getItem("nameDB");
  //     const isgetDataItems = await getDataItems(nameDB);
  //     const isgetTokensItems = await getTokensItems(nameDB);
  //     await onValue(isgetDataItems, async (res) => {
  //       await setState({ data: [], dataKeyUpdate: [] });
  //       await _.map(res.val(), async (v, k) => {
  //         await state.dataKeyUpdate.push(k);
  //         await state.data.push(v);
  //       });
  //       await onValue(isgetTokensItems, async (res) => {
  //         setState({ sendToken: res.val() });
  //       });
  //       await setState({
  //         loader_Visible: false,
  //       });
  //     });
  //   });
  // };

  //  const del = async (item) => {
  //     setState({ loader_Visible: true }, async () => {
  //       const nameDB = await AsyncStorage.getItem("nameDB");
  //       await _.map(state.sendToken, async (v, k) => {
  //         await API.post(
  //           "",
  //           {
  //             to: v,
  //             title: "มีการลบสินค้า",
  //             body: `ลบ ${item.item.name}`,
  //           },
  //           ""
  //         ).then(async (res) => {});
  //       });
  //       await delDataStore(nameDB, state.dataKeyUpdate[item.index]);
  //       setState({ loader_Visible: false });
  //     });
  //   };
  return (
    <Fragment>
      <CustomHeader title={`บ้าน : ${title}`} />
    </Fragment>
  );
};
export default Home;
