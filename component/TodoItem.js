import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil/dist';
import { todoListState } from './atoms';

function replaceTodo(todo, index, updatedTodo) {
  return [...todo.slice(0, index), updatedTodo, ...todo.slice(index + 1)];
}

const TodoItem = ({ item }) => {
  const [todo, setTodo] = useRecoilState(todoListState);
  const [input, setInput] = useState(item.name);
  const index = todo.indexOf(item);

  const toggleCheckTodo = () => {
    const newTodo = { ...item, checked: !item.checked };
    const newTodoList = replaceTodo(todo, index, newTodo);
    setTodo(newTodoList);
  };

  const toggleEditTodo = () => {
    const newTodo = { ...item, editable: !item.editable };
    const newTodoList = replaceTodo(todo, index, newTodo);
    setTodo(newTodoList);
  };

  const onEdit = () => {
    if (!input.trim()) {
      alert('공백은 입력하실 수 없습니다. 😭');
      return;
    }
    const newTodo = {
      ...item,
      editable: false,
      name: input,
    };
    const newTodoList = replaceTodo(todo, index, newTodo);
    setTodo(newTodoList);
  };

  const onDelete = () => {
    const newTodoList = [...todo.slice(0, index), ...todo.slice(index+1)];
    setTodo(newTodoList);
  };

  return (
    <TouchableOpacity
      key={item.id}
      style={styles.todoContainer}
      onPress={toggleCheckTodo}
      onLongPress={toggleEditTodo}
    >
      <MaterialCommunityIcons
        style={styles.toggle}
        name={item.checked ? 'checkbox-marked-circle-outline' : 'checkbox-blank-circle-outline'}
        size={20}
        color="gray"
      />
      {item.editable? (
        <TextInput
          style={{
          ...styles.todo,
          backgroundColor: item.editable ? '#f7fbff' : '#e4f6ff',
          textDecorationLine: item.checked ? 'line-through' : 'none',
        }}
          clearButtonMode="while-editing"
          onChangeText={text => setInput(text)}
          onSubmitEditing={onEdit}
          editable={item.editable}
          value={item.editable ? input : item.name}
        />
    ) : <Text>{item.name}</Text>}
      <MaterialCommunityIcons
        style={styles.deleteButton}
        name='trash-can-outline'
        size={20}
        color="gray"
        onPress={onDelete}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
  },
  todo: {
    flex:1,
    width: 100,
    height: 21,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 15,
    fontWeight: '200',
    color: 'gray',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
  },
  deleteButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
    width: 50,
    height: 20,
    borderColor: 'gray',
  },
});

export default TodoItem;