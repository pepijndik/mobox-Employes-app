import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';

const BekijkAfspraak = (props) => {
  return (
    <Modal isVisible={false} onBackdropPress={props.close}>
      <View style={styles.dialogBox}>
        <View style={styles.icon}></View>

        <View style={styles.text}>
          <Text style={styles.status}>Status</Text>
          <Text>Desc</Text>
        </View>
        <TouchableOpacity onPress={props.close}>
          <View>
            <Text style={styles.buttonText}>GOT IT</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default BekijkAfspraak;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BCD4',
    height: 300,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 80,
    marginLeft: 40,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});
