import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState('');
  const [task, setTask] = useState('');

  function handleChange(text) {
    setTask(text);
  }

  function handleSubmit() {
    const newTask = {
      id: tasks.length,
      task,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <View style={styles.container}>
      <Text>To Do App</Text>
      <Text>Never seen before</Text>
      <FlatList
        style={styles.list}
        data={tasks}
        renderItem={({item}) => <Text>{item.task}</Text>}
        keyExtractor={task => task.id}
      />
      {/* <Text>{task}</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Crear nueva tarea"
        onChangeText={handleChange}
        onSubmitEditing={handleSubmit}
        value={task}
        returnKeyType="done"
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#333'
  },
  list: {
    flex: 1
  }
});
