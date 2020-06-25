import React, { useRef, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil/dist';
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