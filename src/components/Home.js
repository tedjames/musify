import React, { Component } from 'react';
import {
  ScrollView,
  Linking
} from 'react-native';
import { Card, Button, Icon, Title, Tile, Caption, Image, Text, Subtitle, View } from '@shoutem/ui';
import axios from 'axios';

export default class Home extends Component {
  componentWillMount() {
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => console.log(response));
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.titleSection}>
          <Image
            styleName="large-banner"
            source={{ uri: 'https://s-media-cache-ak0.pinimg.com/originals/fa/5d/78/fa5d785c94f77db2d4685a62b6fb8d01.gif' }}
          >
            <Tile>
              <Title style={styles.title} >MUSIFY</Title>
              <Caption style={styles.subTitle} >SPOTIFY'S DERANGED STEP-BROTHER</Caption>
            </Tile>
          </Image>
        </View>
        <Text style={styles.textDivider}>NEW ALBUMS</Text>
        <ScrollView horizontal={true} style={{ paddingLeft: 2 }}>
          <Card style={{ margin: 5, width: 200 }}>
            <Image
              styleName="medium-wide"
              style={{ height: 200, width: 200 }}
              source={{uri: 'https://upload.wikimedia.org/wikipedia/en/d/db/Deadmau5_Album_Title_Goes_Here.jpg'}}
            />
            <View styleName="content">
              <Text style={styles.albumName}>Album Title Goes Here</Text>
              <Caption style={styles.artistName}>Deadmau5</Caption>
              <View styleName="horizontal v-center space-between">
                <View styleName="horizontal">
                  <Subtitle styleName="md-gutter-right">$4.95</Subtitle>
                  <Caption styleName="line-through">$12.00</Caption>
                </View>
                <Button onPress={()=> Linking.openURL('https://www.gofuckingwork.com/?lang=en-US')} styleName="tight clear"><Icon name="cart" /></Button>
              </View>
            </View>
          </Card>
        </ScrollView>

      </ScrollView>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#eee',
    flex: 1
  },
  titleSection: {
    position: 'relative',
    bottom: 40,
    marginBottom: -40
  },
  title: {
    position: 'relative',
    top: 25,
    letterSpacing: 6
  },
  subTitle: {
    position: 'relative',
    top: 18,
    color: '#cccccc'
  },
  textDivider: {
    fontWeight: '600',
    fontSize: 11.5,
    color: '#969696',
    marginLeft: 15,
    marginTop: 20,
    letterSpacing: 0.5
  },
  albumName: {
    color: "#181818",
  },
  artistName: {
    marginBottom: 15
  }
};
