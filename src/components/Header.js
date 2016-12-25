import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from '@shoutem/ui';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="sidebar" style={styles.icon}/>
        <Text style={styles.text}>{this.props.text}</Text>
        <Icon name="share" style={styles.icon} />
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 65,
    paddingTop: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    zIndex: 5
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#212121',
    letterSpacing: 1.25,
    fontFamily: 'Rubik'

  },
  icon: {
    color: '#212121',
    position: 'relative',
    bottom: 4,
    marginLeft: 10,
    marginRight: 10
  }
};
