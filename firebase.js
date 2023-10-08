// Import the functions you need from the SDKs you need
import React, { Component, Fragment } from "react";
import { initializeApp } from "firebase/app";
import * as auth from "firebase/auth";
import {
  getDatabase,
  ref,
  onValue,
  set,
  remove,
  push,
  update,
  child,
} from "firebase/database";
import { AsyncStorage } from "react-native";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAJs3cjGWyWsVEHK0WTR5BVZrYT3DuI-9c",
  authDomain: "checkstock-3c215.firebaseapp.com",
  projectId: "checkstock-3c215",
  storageBucket: "checkstock-3c215.appspot.com",
  messagingSenderId: "1074861387072",
  appId: "1:1074861387072:web:d69e78cec10eda1465dea5",
  measurementId: "G-FX4XR2N1R0",
};
const app = initializeApp(firebaseConfig);
const authfirebase = auth;
const getauth = authfirebase.getAuth();
// const getDataItems = ref(getDatabase(), `${await AsyncStorage.getItem("nameDB")}/items/`);
// const getTokensItems = ref(getDatabase(), `${await AsyncStorage.getItem("nameDB")}/Tokens/`);

async function getDataItems(nameDB) {
  let getDataItems;
  getDataItems = ref(getDatabase(), `${nameDB}/items/`);
  return getDataItems;
}

async function getTokensItems(nameDB) {
  let getTokensItems;
  getTokensItems = ref(getDatabase(), `${nameDB}/Tokens/`);
  return getTokensItems;
}

async function addTokenStore(nameDB, user, data) {
  const db = getDatabase();
  const reference = ref(db, `${nameDB}/Tokens/` + user);
  set(reference, data);
}

async function addDataStore(nameDB, data) {
  const db = getDatabase();
  const reference = ref(db, `${nameDB}/items/`);
  // set(reference, data);
  push(reference, data);
}

async function addSwitchStore(nameDB, data) {
  const db = getDatabase();
  const reference = ref(db, `${nameDB}/Switchs/`);
  // set(reference, data);
  push(reference, data);
}

async function delDataStore(nameDB, user) {
  console.log("user ====>", user);
  const db = getDatabase();
  const reference = ref(db, `${nameDB}/items/` + user);
  remove(reference);
}

async function updateDataStore(nameDB, data, newPostKey) {
  const db = getDatabase();
  const reference = ref(db, `${nameDB}/items/`);
  let updates = {};
  updates[newPostKey] = data;
  update(reference, updates);
}

export {
  app,
  authfirebase,
  getauth,
  updateDataStore,
  addTokenStore,
  onValue,
  addDataStore,
  addSwitchStore,
  getDataItems,
  getTokensItems,
  delDataStore,
};