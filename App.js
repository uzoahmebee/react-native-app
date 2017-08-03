import React , {Component } from 'react';
import { StyleSheet, Text, View , AppRegistry, Image } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every 2 seconds
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 2000);
  }

    render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class App extends Component {

  render() {   
    return (
      <View style={styles.container}>
         <Text style ={styles.bluelarge}>Hello world! </Text>
         <Blink text='Blinking Text Line 1' />
         <Blink text='Blinking Text Line 2'/>
         <Image source={require('./pictures/olusegun-samuel-seal.jpg')} style={{width: 290, height: 205}}/>
         <View style= {{flex: 2, backgroundColor: 'powderblue'}}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  blueLarge: {
    color: 'blue',
    fontSize: 30,
  },
});
