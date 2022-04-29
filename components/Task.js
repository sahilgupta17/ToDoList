import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import CheckBox from "expo-checkbox";

const Task = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const [task, setTask] = useState(props.text);
  const handleCompletedTask = () => {
    if (!isSelected) {
      props.onTaskCompleted(props.index);
    }
    setIsSelected(!isSelected);
  };

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        {/* <View style={styles.square}></View> */}
        <CheckBox
          value={isSelected}
          onValueChange={() => handleCompletedTask()}
          style={styles.checkbox}
        />
        <TextInput
          style={styles.itemText}
          onChangeText={(text) => setTask(text)}
          value={task}
        />
      </View>
      {/* Delete button instead of the circular button */}
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  circular: {
    width: 12,
    height: 12,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#55BCF6",
  },
});
export default Task;
