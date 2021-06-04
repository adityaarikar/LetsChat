import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity style={styles.main}>
      <View style={styles.titleView}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 50,
    width: '75%',
    height: '22%',
    margin: 'auto',
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
});
