import React, {Component} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CreateScreen from './Screens/CreateScreen';
import LadingScreen from './Screens/LandingScreen';
import LoginScreen from './Screens/LoginScreen';
import StationsScreen from './Screens/StationsScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <LadingScreen />
        {/* <CreateScreen /> */}
        {/* <LoginScreen /> */}
        {/* <StationsScreen /> */}
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
