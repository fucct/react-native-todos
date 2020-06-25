import React, { useRef, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil/dist';
import TodoList from './component/TodoList';
import TodoInput from './component/TodoInput';
import { todoFilterState, todoListState } from './component/atoms';

const App = () => {
  const [todo, setTodo] = useRecoilState(todoListState);
  const [filter, setFilter] = useRecoilState(todoFilterState);
  const nextId = useRef(1);

  const checkTodo = (item) => {
    const newItem = { ...item, checked: !item.checked };
    const newTodos = [...todo];
    newTodos.splice(todo.indexOf(item), 1, newItem);
    setTodo(newTodos);
  };

  const editTodo = (item) => {
    const newItem = { ...item, editable: !item.editable };
    const newTodos = [...todo];
    newTodos.splice(todo.indexOf(item), 1, newItem);
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
    newTodos.splice(todo.indexOf(item), 1, newTodo);
    setTodo(newTodos);
    setInput('');
  };

  const onDelete = (item) => {
    const newTodos = [...todo];
    newTodos.splice(todo.indexOf(item), 1);
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
        <TodoInput />
        <TodoList
          filter={filter}
          todo={todo}
          toggleTodo={checkTodo}
          editTodo={editTodo}
          toggleFilter={toggleFilter}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </View>
    </SafeAreaView>
  );
};

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

export default App;