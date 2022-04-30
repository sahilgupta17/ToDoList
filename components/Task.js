import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import CheckBox from "expo-checkbox";
import DeleteTaskIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Task = (props) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [task, setTask] = useState(props.text);

  useEffect(() => {
    props.onTaskCompleted(props.index, isCompleted);
  }, [handleTaskCompletion, isCompleted]);

  const handleTaskCompletion = () => {
    setIsCompleted(!isCompleted);
  };

  const deleteTask = () => {
    props.handleTaskDeletion(props.index);
  };

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        {/* <View style={styles.square}></View> */}
        <CheckBox
          value={isCompleted}
          onValueChange={() => handleTaskCompletion()}
          style={styles.checkbox}
        />
        <TextInput
          style={styles.itemText}
          onChangeText={(text) => setTask(text)}
          value={task}
        />
      </View>
      <TouchableOpacity onPress={() => deleteTask()}>
        <DeleteTaskIcon name="delete" size={20} style={styles.deleteTask} />
      </TouchableOpacity>
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
  deleteTask: {
    color: "#000000",
    padding: 3,
    borderRadius: 5,
  },
});
export default Task;
