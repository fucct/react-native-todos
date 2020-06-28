import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useRecoilValue } from 'recoil/dist';
import { filteredTodoListState } from './atoms';

const Filter = ({ filter, toggleFilter }) => {
  const todo = useRecoilValue(filteredTodoListState);

  return (
    <View style={styles.listFooterContainer}>
      <View style={styles.countContainer}>
        <Text>총 <Text style={{ fontWeight: 'bold' }}>{todo.length}</Text>개</Text>
      </View>
      <View style={styles.filters}>
        <TouchableOpacity
          style={{ borderWidth: filter === 'all' ? 1 : 0, borderColor: 'red' }}
          onPress={() => toggleFilter('all')}
        ><Text>전체 보기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ borderWidth: filter === 'todo' ? 1 : 0, borderColor: 'red' }}
          onPress={() => toggleFilter('todo')}
        >
          <Text>해야할 일</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ borderWidth: filter === 'done' ? 1 : 0, borderColor: 'red' }}
          onPress={() => toggleFilter('done')}
        >
          <Text>완료한 일</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listFooterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
  },
  countContainer: {
    flex: 1,
  },
  filters: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 40,
  },
});

export default Filter;