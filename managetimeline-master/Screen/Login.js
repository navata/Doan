import React, {Component} from 'react';
import {
  AppRegistry,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image,
  TextInput,
  Button,
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View,
  Keyboard, // Container component
} from 'react-native';

import {StackNavigator} from 'react-navigation';
//import Spinner from "react-native-loading-spinner-overlay";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      phone: '',
      password: '',
    };
  }
  componentWillUnmount() {
    Keyboard.dismiss();
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#16a085',
      elevation: null,
    },
    header: null,
  };
  async onLoginPress() {
    const {phone, password} = this.state;

    console.log(phone);
    console.log(password);
    await AsyncStorage.setItem('phone', phone);
    await AsyncStorage.setItem('password', password);

    //save data with asyncstorage
    let loginDetails = {
      phone: phone,
      password: password,
    };
    try {
      let loginDetails = await AsyncStorage.getItem('loginDetails');
      let ld = JSON.parse(loginDetails);

      if (ld.phone != null && ld.password != null) {
        if (ld.phone == phone && ld.password == password) {
          alert('Login Successful');
          this.props.navigation.navigate('App');
        } else {
          alert('Phone or Password does not exist!');
        }
      }
    } catch (error) {
      alert(error);
    }
  }

  async showData() {
    let loginDetails = await AsyncStorage.getItem('loginDetails');
    let ld = JSON.parse(loginDetails);
    alert('phone: ' + ld.phone + ' ' + 'password: ' + ld.password);
  }
  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <View style={styles.container}>
          <View behavior="padding" style={styles.container}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require('../img/login.png')} />
              <Text style={styles.subtext}>Calendar App</Text>
            </View>
            <View style={styles.keyboard}>
              <View style={styles.window}>
                <TextInput
                  ref={(input) => (this.phone = input)}
                  autoFocus={false}
                  placeholder="phone"
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  returnKeyType="next"
                  onSubmitEditing={() => this.passwordInput.blur()}
                  keyboardType="phone-pad"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={this.state.phone}
                  onChangeText={(phone) => this.setState({phone})}
                />
              </View>
              <View style={styles.window}>
                <TextInput
                  autoFocus={false}
                  placeholder="Password"
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  returnKeyType="go"
                  secureTextEntry
                  ref={(input) => (this.passwordInput = input)}
                  value={this.state.password}
                  onChangeText={(password) => this.setState({password})}
                  onSubmitEditing={() => this.passwordInput.blur()}
                />
              </View>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={this.onLoginPress.bind(this)}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => this.props.navigation.navigate('Register')}
              title="Sign up">
              Sign up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => this.props.navigation.navigate('ForgetPassword')}
              title="Forget Password">
              Forget Password
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16a085',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 150,
  },
  subtext: {
    color: '#ffffff',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.8,
  },
  keyboard: {
    margin: 20,
    padding: 20,
    alignSelf: 'stretch',
  },
  buttonContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#27ae60',
    paddingVertical: 15,
  },
  window: {
    marginBottom: 15,
  },
});

AppRegistry.registerComponent('Login', () => Login);
