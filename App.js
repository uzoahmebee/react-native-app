import React , {Component } from 'react';
import { StyleSheet, Text, TextInput, View , AppRegistry, Image, Button, 
    Alert, TouchableOpacity, ScrollView } from 'react-native';

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
constructor (props) {
  super(props);
  this.state = {text: ''};
}

_onPressButton(){
  Alert.alert('You tapped the button')
}

  render() {   
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={this._onPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableOpacity</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Tap Me"
              color="white"
            />
          </View>
          <TextInput
              style = {{height:40}}
              placeholder="Type here to translate!"
              onChangeText={(text) => this.setState({text})} />
            <Text style = {{padding: 10, fontSize: 42}}>
              {this.state.text.split(' ').map((word) => word && '👍').join(' ')} 
             </Text>
           <Text style ={styles.bluelarge}>Hello world! </Text>
           <Blink text='Blinking Text Line 1' />
           <Blink text='Blinking Text Line 2'/>
           <Image source={require('./pictures/olusegun-samuel-seal.jpg')} 
                style={{width: 290, height: 205}}/>
           <View style= {{ backgroundColor: 'powderblue',
              width: 50, height: 50}}/>
                  <TouchableOpacity onPress={this._onPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableOpacity</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Tap Me"
              color="white"
            />
          </View>
          <TextInput
              style = {{height:40}}
              placeholder="Type here to translate!"
              onChangeText={(text) => this.setState({text})} />
            <Text style = {{padding: 10, fontSize: 42}}>
              {this.state.text.split(' ').map((word) => word && '👍').join(' ')} 
             </Text>
           <Text style ={styles.bluelarge}>Hello world! </Text>
           <Blink text='Blinking Text Line 1' />
           <Blink text='Blinking Text Line 2'/>
           <Image source={require('./pictures/olusegun-samuel-seal.jpg')} 
                style={{width: 290, height: 205}}/>
           <View style= {{ backgroundColor: 'powderblue',
              width: 50, height: 50}}/>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
 button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  },
   buttonContainer: {
    margin:20,
    backgroundColor: "#841584"
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
     justifyContent: 'space-around',
     alignItems: 'center'
  },
  bluelarge: {
    color: 'blue',
    fontSize: 30
  },

  white:{
    color: 'white'
  },
});
