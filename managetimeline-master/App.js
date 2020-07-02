/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React

//Import Navigators from React Navigation
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

//Import all the screens needed
import SplashScreen from './Screen/SplashScreen.js';
// import LoginScreen from './Screen/LoginScreen.js';
// import RegisterScreen from './Screen/RegisterScreen.js';
import DrawerNavigationRoutes from './Screen/DrawerNavigatorRoutes.js';
import Routes from './Screen/Route.js';
import Login from './Screen/Login.js';
import ForgetPassword from './Screen/ForgetPassword.js';
import Register from './Screen/Register.js';
import ChangePassword from './Screen/ChangePassword.js';
import {StackNavigator} from 'react-navigation';

import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';

import CalendarScreen from './Screen/SettingsScreen.js';
import CustomSidebarMenu from './Screen/Components/CustomSidebarMenu.js';
import NavigationDrawerHeader from './Screen/Components/NavigationDrawerHeader.js';
import EntertaimentScreen from './Screen/Entertaiment.js';
import GameScreen from './Screen/Game.js';
class Home extends Component<{}> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#16a085',
      elevation: null,
    },
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#002f6c" barStyle="light-content" />
        <Login navigation={this.props.navigation} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomeScreenStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Calendar Screen',
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc',
        },
        headerTintColor: '#fff',
      };
    },
  },
});

const SettingsScreenStack = createStackNavigator({
  CalendarScreen: {
    screen: CalendarScreen,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Calendar Screen',
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc',
        },
        headerTintColor: '#fff',
      };
    },
  },
});

const EntertaimentScreenStack = createStackNavigator({
  EntertaimentScreen: {
    screen: EntertaimentScreen,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Calendar Screen',
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc',
        },
        headerTintColor: '#fff',
      };
    },
  },
});

const GameScreenStack = createStackNavigator({
  GameScreen: {
    screen: GameScreen,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Calendar Screen',
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc',
        },
        headerTintColor: '#fff',
      };
    },
  },
});

const DrawerNavigatorRoutes = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreenStack,
    },
    SettingsScreen: {
      screen: SettingsScreenStack,
    },
    EntertaimentScreen: {
      screen: EntertaimentScreenStack,
    },
    GameScreen: {
      screen: GameScreenStack,
    },
  },
  {
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);

const AppStack = createStackNavigator({
  // Home: {
  //   screen: Home,
  //   navigationOptions: {
  //     title: 'Home',
  //   },
  // },
  HomeScreen: {
    screen: DrawerNavigatorRoutes,
    navigationOptions: ({navigation}) => {
      return {
        header: null,
        title: 'Home',
        headerStyle: {backgroundColor: '#f05555'},
        headerTintColor: '#ffffff',
      };
    },
  },
  View: {
    screen: ViewUser,
    navigationOptions: {
      title: 'View User',
      headerStyle: {backgroundColor: '#f05555'},
      headerTintColor: '#ffffff',
    },
  },
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'View All User',
      headerStyle: {backgroundColor: '#f05555'},
      headerTintColor: '#ffffff',
    },
  },
  Update: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'Update User',
      headerStyle: {backgroundColor: '#f05555'},
      headerTintColor: '#ffffff',
    },
  },
  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      title: 'Delete User',
      headerStyle: {backgroundColor: '#f05555'},
      headerTintColor: '#ffffff',
    },
  },
  RegisterUser: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'RegisterUser',
    },
  },
});
const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },

  ForgetPassword: {
    screen: ForgetPassword,
    navigationOptions: {
      title: 'ForgetPassword',
    },
  },
  ChangePassword: {
    screen: ChangePassword,
    navigationOptions: {
      title: 'ChangePassword',
    },
  },

  RegisterUser: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Register User',
      headerStyle: {backgroundColor: '#f05555'},
      headerTintColor: '#ffffff',
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register',
    },
  },
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
  App: AppStack,
  Auth: AuthStack,
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
