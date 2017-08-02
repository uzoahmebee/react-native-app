import React from 'react';
import {Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Image } from 'react-native';

export default class App extends React.Component {
  render() {   
    return (
      <View style={styles.container}>
         <Text>Hello world! </Text>
         <Image source={require('./pictures/olusegun-samuel-seal.jpg')} style={{width: 290, height: 205}}/>
      </View>
    );
  }
}

        //<Text>Open up App.js to start working on your app!</Text>
        //<Text>Changes you make will automatically reload.</Text>
       // <Text>Shake your phone to open the developer menu.</Text>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
