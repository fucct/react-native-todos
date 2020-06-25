import React, { useRef, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useSetRecoilState } from 'recoil/dist';
import { todoListState } from './atoms';

function TodoInput() {
  const [input, setInput] = useState('');
  const setTodoList = useSetRecoilState(todoListState);
  const nextId = useRef(1);

  const createTodo = () => {
    if (!input.trim()) {
      alert('공백은 입력하실 수 없습니다. 😭');
      return;
    }
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: String(nextId.current),
        checked: false,
        editable: false,
        name: input,
      },
    ]);
    setInput('');
    nextId.current += 1;
  };

  return (
    <TextInput
      style={styles.inputTodo}
      clearButtonMode="while-editing"
      onChangeText={text => setInput(text)}
      onSubmitEditing={createTodo}
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