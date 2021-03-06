import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const isValid = (text) => {
    // Checks whether the text is empty, null or just white spaces or not
    return text !== "" && text !== null && text !== undefined;
  };

  const addTask = () => {
    Keyboard.dismiss();
    if (isValid(task)) {
      setTaskItems([...taskItems, task]);
      setTask(null);
    }
  };

  const handleTaskCompletion = (index, isCompleted) => {
    let completedTask = taskItems[index];
    let taskItemsCopy = [...taskItems];
    taskItemsCopy.splice(index, 1);
    taskItemsCopy = isCompleted
      ? [...taskItemsCopy, completedTask]
      : [completedTask, ...taskItemsCopy];
    setTaskItems(taskItemsCopy);
  };

  const handleTaskDeletion = (index) => {
    let taskItemsCopy = [...taskItems];
    taskItemsCopy.splice(index, 1);
    setTaskItems(taskItemsCopy);
  };

  return (
    <View style={styles.container}>
      {/* Today's tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <ScrollView style={styles.items}>
          {/*This is where the tasks will go */}
          {taskItems.map((taskItem, index) => {
            return (
              <Task
                key={taskItem}
                index={index}
                text={taskItem}
                onTaskCompleted={handleTaskCompletion}
                handleTaskDeletion={handleTaskDeletion}
              />
            );
          })}
        </ScrollView>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        style={styles.writeTaskWrapper}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          style={styles.input}
          value={task}
          placeholder={"Add a task"}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => addTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addButtonText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
    height: "73%",
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: "3%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 60,
    borderWidth: 1,
    textAlign: "center",
    borderColor: "#C0C0C0",
    width: 250,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {},
});
