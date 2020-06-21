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
    const index = Number(item.id)-1;
    const newTodos = [...todo];
    newTodos.splice(index, 1, item);
    setTodo(newTodos);
  }

  const renderTodoItem = ({ item }) => {
    return (
      <TouchableOpacity key={item.id} style={styles.todoContainer} onPress={() => checkTodo(item)}>
        <Text style={styles.todo}>
          <MaterialCommunityIcons name={item.checked ? "checkbox-marked-circle-outline": "checkbox-blank-circle-outline"} size={24} color="black" />
          {item.itemName}
        </Text>
      </TouchableOpacity>
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
  },
});
