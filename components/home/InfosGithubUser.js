import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native';

export default class InfosGithubUser extends Component {
  state = {
    followers: 0,
    following: 0,
    public_repos: 0,
    thumbnail: null,
    name: '',
  };

  async componentWillMount() {
    const infoCall = await fetch('http://api.github.com/users/jeftarmascarenhas');
    const infoResponse = await infoCall.json();
    this.setState({
      followers: infoResponse.followers,
      following: infoResponse.following,
      public_repos: infoResponse.public_repos,
      thumbnail: infoResponse.avatar_url,
      name: infoResponse.name,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.profile}>
            {this.state.thumbnail && <Image
              style={styles.avatar}
              source={{ uri: this.state.thumbnail }}
              />
            }
            {this.state.thumbnail && <Text style={styles.profileName}>{this.state.name}</Text>}
            {!this.state.thumbnail &&  <Text style={styles.profileName}>Conectando ao github...</Text>}
          </View>
          {this.state.thumbnail && <View style={styles.wrapper}>
            <View style={[styles.box, styles.boxBorder]}>
              <Text style={styles.whiteColor}>Followers</Text>
              <Text style={styles.whiteColor}>{this.state.followers}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.whiteColor}>Following</Text>
              <Text style={styles.whiteColor}>{this.state.following}</Text>
            </View>
            <View style={[styles.box, styles.boxBorder]}>
              <Text style={styles.whiteColor}>public_repos</Text>
              <Text style={styles.whiteColor}>{this.state.public_repos}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.whiteColor}>public_repos</Text>
              <Text style={styles.whiteColor}>{this.state.public_repos}</Text>
            </View>
          </View>}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  profile: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  profileName: {
    color: '#FFF',
    fontSize: 16,
  },
  box: {
    width: '48%',
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxBorder: {
    borderColor: '#333',
    borderRightWidth: 1,
  },
  whiteColor: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});