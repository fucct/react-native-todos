import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import TodoList from './component/TodoList';
import TodoInput from './component/TodoInput';

export default function App() {
  const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState('all');
  const [modalVisible, setModalVisible] = useState(false);

  const onSubmit = (input, setInput) => {
    if (!input.trim()) {
      return;
    }
    const index = String(todo.length + 1);
    const newTodo = {
      id: index,
      checked: false,
      editable: false,
      itemName: input,
    };
    setTodo([...todo, newTodo]);
    setInput('');
  };

  const toggleTodo = (item) => {
    const newItem = { ...item, checked: !item.checked };
    const index = Number(newItem.id) - 1;
    const newTodos = [...todo];
    newTodos.splice(index, 1, newItem);
    setTodo(newTodos);
  };

  const editTodo = (item) => {
    const newItem = { ...item, editable: !item.editable };
    const index = Number(newItem.id) - 1;
    const newTodos = [...todo];
    newTodos.splice(index, 1, newItem);
    setTodo(newTodos);
  };

  const onEdit = (item, input, setInput) => {
    if (!input.trim()) {
      return;
    }
    const newTodo = {
      id: item.id,
      checked: item.checked,
      editable: false,
      itemName: input,
    };
    const newTodos = [...todo];
    newTodos.splice(item.id - 1, 1, newTodo);
    setTodo(newTodos);
    setInput('');
  };

  const onDelete = (item) => {
    const newTodos = [...todo];
    newTodos.splice(item.id - 1, 1);
    setTodo(newTodos);
  };

  const toggleFilter = (filterValue) => {
    setFilter(filterValue);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>TODOS</Text>
      </View>
      <View style={styles.contentContainer}>
        <TodoInput onSubmit={onSubmit} />
        <TodoList
          filter={filter}
          todo={todo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          toggleFilter={toggleFilter}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1f0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '100',
  },
});
