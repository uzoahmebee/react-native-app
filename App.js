import React , {Component } from 'react';
import { StyleSheet, Text, TextInput, View , AppRegistry, Image } from 'react-native';

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


  render() {   
    return (
      <View style={styles.container}>
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
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
     justifyContent: 'space-around',
     alignItems: 'center',
   
  },

  bluelarge: {
    color: 'blue',
    fontSize: 30,
  },

  white:{
    color: 'white',
  },
});
