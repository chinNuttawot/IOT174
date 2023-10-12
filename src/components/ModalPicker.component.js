import React, { useState } from "react";
import { Modal, TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const ModalPicker = (props) => {
  const { isOpen = false, onClose, onChange } = props;
  const [text, setText] = useState("");

  const setTextDefault = () => {
    setText("");
  };
  const onChangeText = (text) => {
    setText(text);
  };
  const onSave = () => {
    if (text) {
      const params = { isPower: false, roomName: text };
      onChange && onChange(params);
    }
    setTextDefault();
    onClose && onClose(!isOpen);
  };

  return (
    <Modal
      animationType="slide"
      presentationStyle={"pageSheet"}
      visible={isOpen}
      onRequestClose={() => {
        onClose && onClose(!isOpen);
        setTextDefault();
      }}
    >
      <View style={styles.centeredView}>
        <TouchableOpacity style={styles.addItem} onPress={onSave}>
          <Text style={styles.textColorWhite}>เพิ่ม</Text>
        </TouchableOpacity>
        <View style={styles.textInput}>
          <Text>ชื่อ</Text>
          <TextInput
            autoFocus={true}
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
      </View>
    </Modal>
  );
};
export default ModalPicker;
