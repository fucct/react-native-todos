import { FlatList } from 'react-native';
import React, { useMemo, useState } from 'react';
import Filter from './Filter';
import TodoItem from './TodoItem';

const filteringTodo = (filter, todo) => {
  if (filter === 'todo') {
    return todo.filter(item => !item.checked);
  }
  if (filter === 'done') {
    return todo.filter(item => item.checked);
  }
  return todo;
};

const TodoList = ({ filter, todo, toggleTodo, editTodo, toggleFilter, onEdit, onDelete }) => {
  const [updatedInput, setUpdatedInput] = useState('');
  const filteredTodo = useMemo(() => filteringTodo(filter, todo), [filter, todo]);

  return (
    <FlatList
      data={filteredTodo}
      renderItem={({ item }) => (
        <TodoItem
          item={item}
          onEdit={onEdit}
          editTodo={editTodo}
          toggleTodo={toggleTodo}
          onDelete={onDelete}
          updatedInput={updatedInput}
          setUpdatedInput={setUpdatedInput}
        />
      )}
      keyExtractor={item => item.id}
      ListFooterComponent={() => {
        return <Filter filter={filter} todo={filteredTodo} toggleFilter={toggleFilter} />;
      }}
    />
  );
};

export default TodoList;
