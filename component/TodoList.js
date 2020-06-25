import { FlatList } from 'react-native';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import Filter from './Filter';
import TodoItem from './TodoItem';
import { filteredTodoListState, todoFilterState } from './atoms';

const TodoList = () => {
  const [filter, setFilter] = useRecoilState(todoFilterState);
  const filteredTodo = useRecoilValue(filteredTodoListState);

  return (
    <FlatList
      data={filteredTodo}
      renderItem={({ item }) => <TodoItem item={item} />}
      keyExtractor={item => item.id}
      ListFooterComponent={() => <Filter filter={filter} toggleFilter={setFilter} />}
    />
  );
};

export default TodoList;
