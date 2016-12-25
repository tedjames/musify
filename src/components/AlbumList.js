import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import AlbumContainer from './AlbumContainer';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';



export default class AlbumList extends Component {
  state = { albums: [] };

  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then( response => this.setState({ albums: response.data }) );
  }

  renderAlbums() {
    return this.state.albums.map( album => <AlbumContainer key={album.title} title={album.title} artist={album.title} url={album.url} image={album.image} thumb={album.thumbnail_image} /> );
  }

  render() {
    return (
      <ScrollView style={styles.listContainer} >
        {this.renderAlbums()}
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={styles.footer}>made with </Text>
          <Icon name="heart" size={8.5} color="#707070" style={{ transform: [{ translateY: 6 }], marginRight: 1.35, marginLeft: 1.35  }}/>
          <Text style={styles.footer}> by ted werbel</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#303030',
    paddingRight: 25,
    paddingLeft: 25,
    paddingTop: 10,
    overflow: 'visible'
  },
  footer: {
    marginBottom: 9,
    marginTop: 3,
    fontSize: 12,
    color: '#707070',
    alignSelf: 'center'
  }
});
