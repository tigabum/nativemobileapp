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
class CreateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fetching: '',
      error: '',
      isValid: true,
      phone: '',
    };
  }

  __doSignUp = () => {
    const {email, password, phone} = this.state;

    if (!email) {
      this.setState({error: 'Email required *', isValid: false});
      return;
    } else if (!password) {
      this.setState({error: 'Weak pasword, minimum 5 chars', isValid: false});

      return;
    } else if (!phone) {
      this.setState({error: 'No phone number', isValid: false});
      return;
    } else if (!__isValidEmail(email)) {
      this.setState({error: 'Inavalid Email', isValid: false});
      return;
    }

    this.__doCreateUser(email, password);
  };

  __doCreateUser = (email, password) => {
    alert(email);
  };

  render() {
    const {email, password, fetching, error, isValid, phone} = this.state;
    return (
      <SafeAreaView style={styles.containerStyle}>
        <View style={{flex: 0.2}}>
          {!!fetching && <ActivityIndicator color={blue} />}
        </View>
        <View style={styles.headerContainerStyle}>
          <Text style={styles.headerTitleStyle}> Sign Up </Text>
        </View>
        <View style={styles.formContainerStyle}>
          <TextInput
            placeholderTextColor="white"
            label={'Email'}
            autoCapitalize={false}
            keyboardType="email-address"
            style={styles.textInputStyle}
            placeholder="Mail address"
            onChangeText={email => {
              this.setState({error});
              this.setState({email});
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
          <TextInput
            placeholderTextColor="white"
            label={'Phone'}
            autoCapitalize={false}
            keyboardType="phone-pad"
            style={styles.textInputStyle}
            placeholder="Phone Number"
            onChangeText={phone => {
              this.setState({phone});
            }}
            error={isValid}
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
            onPress={this.__doSignUp}
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

export default CreateScreen;

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
