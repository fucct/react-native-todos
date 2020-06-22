import { FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Filter from './Filter';
import TodoItem from './TodoItem';

const TodoList = ({ filter, todo, toggleTodo, editTodo, toggleFilter, onEdit, onDelete }) => {
  const [updatedInput, setUpdatedInput] = useState('');
  let filteredTodo;

  if (filter === 'todo') {
    filteredTodo = todo.filter(item => !item.checked);
  } else if (filter === 'done') {
    filteredTodo = todo.filter(item => item.checked);
  } else {
    filteredTodo = todo;
  }



  return (
    <FlatList
      data={filteredTodo}
      renderItem={({ item }) => <TodoItem item={item} onEdit={onEdit} editTodo={editTodo} toggleTodo={toggleTodo} onDelete={onDelete} updatedInput={updatedInput} setUpdatedInput={setUpdatedInput} />}
      keyExtractor={item => item.id}
      ListFooterComponent={() => {
        return <Filter filter={filter} todo={filteredTodo} toggleFilter={toggleFilter} />;
      }}
    />
  );
};

export default TodoList;
