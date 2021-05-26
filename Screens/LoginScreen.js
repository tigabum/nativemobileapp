import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  UIManager,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
  Alert,
} from 'react-native';
const baseMargin = 5;
const doubleBaseMargin = 10;
const blue = '#ff0000';
const __isValidEmail = email => {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: '',
      email: '',
      password: '',
      error: '',
      isValid: true,
    };
  }

  __doLogin = () => {
    const {email, password} = this.state;

    if (!email) {
      this.setState({error: 'Email required *'});
      this.setState({isValid: false});
      return;
    } else if (!password) {
      this.setState({error: 'Weak pasword, minimum 5 chars'});
      this.setState({isValid: false});
      return;
    } else if (!__isValidEmail(email)) {
      this.setState({error: 'Invalid Email'});
      this.setState({isValid: false});
      return;
    }
    // let signInRequestData = {
    //   email,
    //   password,
    // };

    this.__doSingIn(email, password);
  };

  __doSingIn(email, password) {
    alert(email);
  }
  //    __doSingIn = async (email, password) => {
  //     try {
  //       let response = await auth().signInWithEmailAndPassword(email, password);
  //       if (response && response.user) {
  //         Alert.alert("Success ✅", "Logged successfully");
  //       }
  //     } catch (e) {
  //       console.error(e.message);
  //     }
  //   };
  render() {
    const {fetching, email, password, error, isValid} = this.state;
    return (
      <SafeAreaView style={styles.containerStyle}>
        <View style={{flex: 0.2}}>
          {!!fetching && <ActivityIndicator color={blue} />}
        </View>
        <View style={styles.headerContainerStyle}>
          <Text style={styles.headerTitleStyle}> Log In </Text>
        </View>
        <View style={styles.formContainerStyle}>
          <TextInput
            placeholderTextColor="white"
            label={'Email'}
            autoCapitalize={false}
            keyboardType="email-address"
            style={styles.textInputStyle}
            placeholder="Mail address"
            onChangeText={text => {
              // let isValid = this.state.isValid;
              // isValid["email"] = !this.__isValidEmail(text);
              this.setState({isValid: __isValidEmail(text)});
              this.setState({email: text});
            }}
            error={isValid}
          />
          <TextInput
            placeholderTextColor="white"
            label={'Password'}
            secureTextEntry
            autoCapitalize={false}
            style={styles.textInputStyle}
            selectionColor={blue}
            placeholder="Password"
            error={isValid}
            onChangeText={password => this.setState({password})}
          />
        </View>
        {error ? (
          <View style={styles.errorLabelContainerStyle}>
            <Text style={styles.errorTextStyle}>{error}</Text>
          </View>
        ) : null}

        <View style={styles.signInButtonContainerStyle}>
          <TouchableHighlight
            style={styles.signInButtonStyle}
            onPress={this.__doLogin}
            underlayColor={blue}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text style={styles.signInButtonTextStyle}>Continue</Text>
            </View>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#00899e',
  },
  headerContainerStyle: {
    flex: 0.2,
    alignItems: 'center',
  },
  headerTitleStyle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  formContainerStyle: {
    paddingHorizontal: doubleBaseMargin,
    justifyContent: 'space-around',
  },
  textInputStyle: {
    height: 60,
    marginVertical: baseMargin,
    borderRadius: 6,
    paddingHorizontal: doubleBaseMargin,
    backgroundColor: 'transparent',
    borderColor: '#888',
    borderWidth: 1,
  },
  signInButtonContainerStyle: {
    flex: 0.3,
    marginTop: doubleBaseMargin,
    alignItems: 'flex-end',
    paddingHorizontal: baseMargin,
  },
  errorLabelContainerStyle: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
  },
  signInButtonStyle: {
    width: 130,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 130 / 4,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  signInButtonTextStyle: {
    color: 'black',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: baseMargin,
  },
});
