// Import the functions you need from the SDKs you need
import * as auth from "firebase/auth";
import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import {
  getDatabase,
  ref,
  onValue,
  set,
  remove,
  push,
  update,
  child,
  get,
} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAJs3cjGWyWsVEHK0WTR5BVZrYT3DuI-9c",
  authDomain: "checkstock-3c215.firebaseapp.com",
  databaseURL: "https://checkstock-3c215-default-rtdb.firebaseio.com",
  projectId: "checkstock-3c215",
  storageBucket: "checkstock-3c215.appspot.com",
  messagingSenderId: "1074861387072",
  appId: "1:1074861387072:web:d69e78cec10eda1465dea5",
  measurementId: "G-FX4XR2N1R0",
};
const app = initializeApp(firebaseConfig);
const authfirebase = auth;
const getauth = authfirebase.initializeAuth(app, {
  persistence: authfirebase.getReactNativePersistence(ReactNativeAsyncStorage),
});
const getSwitchIot = async (nameDB) => {
  let data = [];
  return new Promise(async (resolve, reject) => {
    try {
      const dbRef = ref(getDatabase());
      const res = await get(child(dbRef, `${nameDB}/IOT/`));
      res.forEach((v, k) => {
        data.push(v.val());
      });
      resolve(data);
    } catch (error) {
      reject(null);
    }
  });
};
const getTokensItems = async (nameDB) => {
  return new Promise(async (resolve, reject) => {
    try {
      let getTokensItems;
      getTokensItems = ref(getDatabase(), `${nameDB}/Tokens/`);
      resolve(getTokensItems);
    } catch (error) {
      reject(null);
    }
  });
};
const addTokenStore = async (nameDB, user, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = getDatabase();
      const reference = ref(db, `${nameDB}/Tokens/` + user);
      set(reference, data);
      resolve(true);
    } catch (error) {
      reject(false);
    }
  });
};
const addSwitchIot = async (nameDB, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = getDatabase();
      const reference = ref(db, `${nameDB}/IOT/`);
      set(reference, data);
      resolve(true);
    } catch (error) {
      reject(false);
    }
  });
};
const updateSwitchIot = async (nameDB, updates) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = getDatabase();
      const reference = ref(db, `${nameDB}/IOT/`);
      set(reference, updates)
      resolve(true);
    } catch (error) {
      reject(false);
    }
  });
};

async function delDataStore(nameDB, user) {
  console.log("user ====>", user);
  const db = getDatabase();
  const reference = ref(db, `${nameDB}/items/` + user);
  remove(reference);
}

export {
  app,
  authfirebase,
  getauth,
  addSwitchIot,
  addTokenStore,
  onValue,
  getSwitchIot,
  updateSwitchIot,
  getTokensItems,
  delDataStore,
};
