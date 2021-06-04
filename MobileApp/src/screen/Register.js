import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Button from '../components/Button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Register = () => {
  return (
    <View style={styles.main}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Username" />
        <MaterialCommunityIcons style={styles.icon} name="account" size={20} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Email Id" />
        <MaterialCommunityIcons style={styles.icon} name="email" size={20} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="PassWord" />
        <MaterialCommunityIcons style={styles.icon} name="lock" size={20} />
      </View>
      <TextInput>Login In Screen</TextInput>
      <Button title="Register" />
      <TouchableOpacity style={styles.registerBtn}>
        <Text style={styles.registerBtnText}>Login...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    margin: 20,
    borderRadius: 30,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  textInput: {
    width: '75%',
    fontSize: 20,
  },
  icon: {
    marginRight: 10,
  },
  registerBtn: {
    margin: 15,
  },
  registerBtnText: {
    fontSize: 20,
  },
});
