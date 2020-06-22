import React from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function PopupMenu({ item, modalVisible, setModalVisible, editTodo }) {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{item.itemName}</Text>
          <View style={styles.editButtonContainer}>
            <TouchableOpacity
              style={{ ...styles.editButton, backgroundColor: '#a8f5fc' }}
              onPress={() => {
                setModalVisible(!modalVisible);
                editTodo(item);
              }}
            >
              <Text style={styles.textStyle}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.editButton, backgroundColor: '#a8f5fc' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  toggle: {},
  todo: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 20,
    fontWeight: '200',
    color: 'gray',
  },
  menu: {},
  modalView: {
    margin: 20,
    backgroundColor: '#e1f4ff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  editButton: {
    marginHorizontal: 5,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  editButtonContainer: {
    flexDirection: 'row',
  },
});

export default PopupMenu;

