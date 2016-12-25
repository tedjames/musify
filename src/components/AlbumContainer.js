import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Card from './Card';
import Button from './button';

export default class AlbumContainer extends Component {
  render() {
    return (
      <Card>
        <View style={styles.topRow}>
          <Image
            style={styles.artistAvatar}
            source={[
                {uri: this.props.thumb},
              ]}
          />
          <Text style={styles.textStyle}>{this.props.title} - {this.props.artist}</Text>
        </View>

        <Image
          style={styles.albumCover}
          source={[
              {uri: this.props.image},
            ]}
        />
      <Button />
    </Card>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 11,
    fontWeight: '500',
    color: '#eeeeee',
    letterSpacing: 1,
    alignSelf: 'center',
    marginLeft: 15,
    backgroundColor: '#212121'
  },
  albumCover: {
    width: 325,
    height: 325,
  },
  artistAvatar: {
    height: 37,
    width: 37,
    borderRadius: 18,
    marginLeft: 12,
    borderColor: '#000',
    borderWidth: 1,
    alignSelf: 'center'
  },
  topRow: {
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 15,
    marginBottom: 10
  }
});
