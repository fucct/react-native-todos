import { FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Filter from './Filter';

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

  const renderList = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.todoContainer}
        onPress={() => toggleTodo(item)}
        onLongPress={() => editTodo(item)}
      >
        <MaterialCommunityIcons
          style={styles.toggle}
          name={item.checked ? 'checkbox-marked-circle-outline' : 'checkbox-blank-circle-outline'}
          size={20}
          color="gray"
        />
        <TextInput
          style={{
            ...styles.todo,
            backgroundColor: item.editable ? '#fafdff' : '#d1f0ff',
            textDecorationLine: item.checked ? 'line-through' : 'none',
          }}
          clearButtonMode="while-editing"
          onChangeText={text => setUpdatedInput(text)}
          onSubmitEditing={() => onEdit(item, updatedInput, setUpdatedInput)}
          editable={item.editable}
          value={item.editable ? updatedInput : item.itemName}
        />
        <MaterialCommunityIcons
          style={styles.deleteButton}
          name='trash-can-outline'
          size={20}
          color="gray"
          onPress={() => onDelete(item)}
        />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={filteredTodo}
      renderItem={({ item }) => renderList({ item })}
      keyExtractor={item => item.id}
      ListFooterComponent={() => {
        return <Filter filter={filter} todo={filteredTodo} toggleFilter={toggleFilter} />;
      }}
    />
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
    width: 70,
    height: 21,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 15,
    fontWeight: '200',
    color: 'gray',
  },
  toggle: {},
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
export default TodoList;
