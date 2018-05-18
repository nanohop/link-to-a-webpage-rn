import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking
} from 'react-native';

export default class Home extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  option1 = () => {

  }

  option2 = () => {
    
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.bold}>Option 1</Text>
        <Text style={styles.text}>Switch apps to the device's web browser:</Text>

        <TouchableOpacity onPress={this.option1}>
          <Text style={styles.link}>Link to https://egghead.io/</Text>
        </TouchableOpacity>

        <Text style={styles.bold}>Option 2</Text>
        <Text style={styles.text}>Showing a webpage directly in the app:</Text>

        <TouchableOpacity onPress={this.option2}>
          <Text style={styles.link}>Link to https://egghead.io/</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40
  },
  text: {
    fontSize: 16,
    margin: 20,
    marginBottom: 0
  },
  bold: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40
  },
  link: {
    margin: 20,
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline'
  }
});
