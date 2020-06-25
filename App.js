import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import TodoList from './component/TodoList';
import TodoInput from './component/TodoInput';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>TODOS</Text>
      </View>
      <View style={styles.contentContainer}>
        <TodoInput />
        <TodoList />
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerMessage}>항목을 길게 누르면 수정</Text>
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
  footerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '100',
  },
  footerMessage: {
    fontSize: 20,
    fontWeight: '100',
  },
});

export default App;