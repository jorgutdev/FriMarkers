import { DrawerItems } from 'react-navigation';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class DrawerMenu extends Component {
  contentOptions = {
    activeTintColor: '#e91e63',
    style: {
      marginVertical: 0,
    },
    drawerIcon: 'menu',
  };

  componentDidMount() {}

  render() {
    return (
      <View style={styles.topContainer}>
        <View style={styles.routesContainer}>
          <DrawerItems
            {...this.props}
            activeTintColor="#0069c0"
            activeBackgroundColor="#0069c0"
            inactiveTintColor="#0069c0"
            inactiveBackgroundColor="#2196F3"
            style={{ backgroundColor: 'transparent' }}
            labelStyle={{ color: '#ffffff', marginLeft: 2 }}
          />
        </View>
        <View style={styles.buttonContainer} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  routesContainer: {
    marginTop: '-2%',
    flex: 1,
    alignItems: 'stretch',
  },
  topContainer: {
    backgroundColor: '#2196F3',
    height: '100%',
  },
  name: {
    color: '#E3F2FD',
    margin: '5%',
    fontSize: 21,
    fontFamily: 'Roboto',
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: 'white',
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  avatar: {
    marginTop: '5%',
    height: 128,
    width: 128,
    borderRadius: 64,
    borderWidth: 4,
    borderColor: '#0069c0',
  },
  buttonContainer: {
    marginTop: '2%',
    alignItems: 'center',
    width: '100%',
  },
});
