import { FlatList } from 'react-native';
import React, { useMemo, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import Filter from './Filter';
import TodoItem from './TodoItem';
import { filteredTodoListState, todoFilterState, todoListState } from './atoms';

const TodoList = ({ toggleTodo, editTodo, onEdit, onDelete }) => {
  const [filter, setFilter] = useRecoilState(todoFilterState);
  const filteredTodo = useRecoilValue(filteredTodoListState);
  const [updatedInput, setUpdatedInput] = useState('');

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
        return <Filter filter={filter} todo={filteredTodo} toggleFilter={setFilter} />;
      }}
    />
  );
};

export default TodoList;
