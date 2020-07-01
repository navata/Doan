import React from 'react';

//Import Navigators
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

//Import External Screens
import HomeScreen from './HomeScreen.js';
import CalendarScreen from './SettingsScreen.js';
import CustomSidebarMenu from './Components/CustomSidebarMenu.js';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader.js';
import EntertaimentScreen from './Entertaiment.js';
import GameScreen from "./Game.js";
const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SecondActivity_StackNavigator = createStackNavigator({
  First: {
    screen: CalendarScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Calendar Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const ForAtivity_StackNavigator = createStackNavigator({
  First: {
    screen: EntertaimentScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Entertaiment Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});
const FiveAtivity_StackNavigator = createStackNavigator({
  First: {
    screen: GameScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Game Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});
const DrawerNavigatorRoutes = createDrawerNavigator(
  {
    HomeScreen: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Home Screen',
      },
    },
    SettingsScreen: {
      screen: SecondActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Calendar Screen',
      },
    },
    EntertaimentScreen: {
      screen: ForAtivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Entertaiment Screen',
      },
    },
     GameScreen: {
      screen: FiveAtivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Game Screen',
      },
    },
  },
  {
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);
export default DrawerNavigatorRoutes;