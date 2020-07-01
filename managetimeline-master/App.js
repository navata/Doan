/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React

//Import Navigators from React Navigation
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

//Import all the screens needed
import SplashScreen from './Screen/SplashScreen.js';
// import LoginScreen from './Screen/LoginScreen.js';
// import RegisterScreen from './Screen/RegisterScreen.js';
import DrawerNavigationRoutes from './Screen/DrawerNavigatorRoutes.js';
import Routes from './Screen/Route.js';
import Login from "./Screen/Login.js";
import ForgetPassword from "./Screen/ForgetPassword.js";
import Register from "./Screen/Register.js";
import ChangePassword from "./Screen/ChangePassword.js"
import { StackNavigator } from "react-navigation";

import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';

// class Home extends Component<{}> {
//   static navigationOptions = {
//     headerStyle: {
//       backgroundColor: "#16a085",
//       elevation: null
//     },
//     header: null
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <StatusBar barStyle="light-content" backgroundColor="#16a085" />
//         <Login navigation={this.props.navigation} />
//       </View>
//     );
//   }
// }
class Home extends Component<{}> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#002f6c" 
          barStyle="light-content"
        />
        <Login navigation={this.props.navigation} />
      </View>
    );
  }
}

const Auth = createStackNavigator({
  //Stack Navigator for Login and Sign up Screen
  // LoginScr        
  //   screen: LoginScreen,
  //   navigationOptions: {
  //     headerShown: false,
  //   },
  // },
  // RegisterScreen: { 
  //   screen: RegisterScreen,
  //   navigationOptions: {
  //     title: 'Register',
  //     headerStyle: {
  //       backgroundColor: '#307ecc',
  //     },
  //     headerTintColor: '#fff',
  //   },
  // },
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: "Register"
    }
  },
  ForgetPassword: {
    screen: ForgetPassword,
    navigationOptions: {
      title: "ForgetPassword"
    }
  },
   ChangePassword: {
    screen: ChangePassword,
    navigationOptions: {
      title: "ChangePassword"
    }
  },
   HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'HomeScreen',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  View: {
    screen: ViewUser,
    navigationOptions: {
      title: 'View User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'View All User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  Update: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'Update User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  RegisterUser: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Register User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      title: 'Delete User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
/* Switch Navigator for those screens which needs to be switched only once
  and we don't want to switch back once we switch from them to the next one */
const App = createSwitchNavigator({ 
  SplashScreen: {
    /* SplashScreen which will come once for 5 Seconds */
    screen: SplashScreen,
    navigationOptions: {
      /* Hiding header for Splash Screen */
      headerShown: false,
    },
  },
  Auth: {
    /* Auth Navigator which includer Login Signup will come once */
    screen: Auth,
  },
  DrawerNavigationRoutes: {
    /* Navigation Drawer as a landing page */
    screen: DrawerNavigationRoutes,
    navigationOptions: {
      /* Hiding header for Navigation Drawer as we will use our custom header */
      headerShown: false,
    },
  },
});

export default createAppContainer(App);