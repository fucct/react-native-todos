import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

function TodoInput({ onSubmit }) {
  const [input, setInput] = useState("");

  return (
    <TextInput
      style={styles.inputTodo}
      clearButtonMode="while-editing"
      onChangeText={text => setInput(text)}
      onSubmitEditing={() => onSubmit(input, setInput)}
      placeholder="Todo"
      autoFocus
      value={input}
    />
  );
}
const styles = StyleSheet.create({
  inputTodo: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
  },
});

export default TodoInput;