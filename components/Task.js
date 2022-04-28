import React, { useState } from "react";
import { View, StyleSheet, TextInput, Checkbox } from "react-native";

const Task = (props) => {
  const [isSlected, setIsSelected] = useState(false);
  const [task, setTask] = useState(props.text);

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        {/* <View style={styles.square}></View> */}
        {/* <Checkbox
          value={isSlected}
          onValueChange={setIsSelected}
          style={styles.checkbox}
        /> */}
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
    width: 24,
    height: 24,
    borderRadius: 5,
    marginRight: 15,
  },
  // square: {
  //   width: 24,
  //   height: 24,
  //   backgroundColor: "#55BCF6",
  //   opacity: 0.4,
  //   borderRadius: 5,
  //   marginRight: 15,
  // },
  itemText: {
    // maxWidth: "80%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#55BCF6",
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
