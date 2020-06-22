import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState("all");

  const onSubmit = () => {
    const index = String(todo.length + 1);
    const newTodo = {
      id: index,
      checked: false,
      itemName: input,
    };
    setTodo([...todo, newTodo])
    setInput("");
  }

  const checkTodo = item => {
    console.log(item);
    item.checked = !item.checked;
    const index = Number(item.id) - 1;
    const newTodos = [...todo];
    newTodos.splice(index, 1, item);
    setTodo(newTodos);
  }

  const toggleFilter = (filterValue) => {
    setFilter(filterValue);
  }

  const renderTodoItem = ({ item }) => {
    return (
      <TouchableOpacity key={item.id} style={styles.todoContainer} onPress={() => checkTodo(item)}>
        <MaterialCommunityIcons
          name={item.checked ? "checkbox-marked-circle-outline" : "checkbox-blank-circle-outline"}
          size={20} color="gray"
        />
        <Text style={{
          fontSize: 20,
          fontWeight: "200",
          color: "gray",
          marginLeft: 5,
          textDecorationLine: item.checked ? 'line-through' : "none",
        }}
        >
          {item.itemName}
        </Text>
      </TouchableOpacity>
    );
  }

  const listFooter = () => {
    return (
      <View style={styles.listFooterContainer}>
        <View style={styles.countContainer}>
          <Text>총 <Text style={{ fontWeight: "bold" }}>{todo.length}</Text>개</Text>
        </View>
        <View style={styles.filters}>
          <TouchableOpacity style={{ borderWidth: filter === "all" ? 1 : 0, borderColor: "gray" }}
                            onPress={() => toggleFilter("all")}
          ><Text>전체 보기</Text></TouchableOpacity>
          <TouchableOpacity style={{ borderWidth: filter === "todo" ? 1 : 0, borderColor: "gray" }}
                            onPress={() => toggleFilter("todo")}
          >
            <Text>해야할 일</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderWidth: filter === "done" ? 1 : 0, borderColor: "gray" }}
                            onPress={() => toggleFilter("done")}
          >
            <Text>완료한 일</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true}/>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>TODOS</Text>
      </View>
      <View style={styles.contentContainer}>
        <TextInput style={styles.inputTodo}
                   clearButtonMode={'while-editing'}
                   onChangeText={text => setInput(text)}
                   onSubmitEditing={onSubmit}
                   placeholder="Todo"
                   autoFocus={true}
                   value={input}
        />
        <FlatList data={todo}
                  renderItem={({ item }) => renderTodoItem({ item })}
                  keyExtractor={item => item.id}
                  ListFooterComponent={listFooter}
        />
      </View>
      <View style={styles.footerContainer}><Text>하이</Text></View>
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
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  footerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "100",
  },
  inputTodo: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
  },
  todoContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
  },
  todo: {
    fontSize: 20,
    fontWeight: "200",
    color: "gray",
    marginLeft: 5,
  },
  listFooterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 40,
  }
});
