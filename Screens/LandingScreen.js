import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class LadingScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Addis Train App</Text>
        <Image
          style={styles.image}
          source={{
            uri: 'https://assets.euromoneydigital.com/dims4/default/cd51a45/2147483647/strip/true/crop/780x439+0+71/resize/1200x675!/quality/90/?url=http%3A%2F%2Feuromoney-brightspot.s3.amazonaws.com%2F98%2F25%2F87d5a1cce3bc1d7df05f62d28526%2Ftrain-mobile-780.jpg',
          }}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textone}>New? Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textone}>Already have account? Log in</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00899e',

    alignItems: 'center',
  },
  button: {
    margin: 5,
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#015f6e',
  },
  textone: {
    color: 'white',
    fontSize: 15,
    padding: 4,
  },
  text: {
    color: 'white',
    fontSize: 25,
    marginTop: 100,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    borderRadius: 5,
  },
});
