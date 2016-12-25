import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>BUY NOW</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'stretch',
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#42b5f6'
  },
  text: {
    fontSize: 11,
    fontWeight: '500',
    color: '#fff',
    letterSpacing: 1,
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#42b5f6'
  }
});

export default Button;
