import React from 'react';
import LaunchScreen from '../Containers/LaunchScreen';
import SplashScreen from '../Containers/SplashScreen';
import MenuScreen from '../Containers/MenuScreen';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import styles from './Styles/NavigationStyles';
import { TouchableOpacity, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DrawerMenu from '../Components/Drawer/DrawerMenu';

// Things that are going to me show on the Drawer menu
const DrawerStack = DrawerNavigator({
  menuScreen: { screen: MenuScreen },
  splashScreen: { screen: SplashScreen },
  launchScreen: { screen: LaunchScreen },
});

const DrawerNavigation = StackNavigator(
  {
    DrawerStack: { screen: DrawerStack },
  },
  {
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: '#4C3E54' },
      title: 'Welcome!',
      headerLeft: <Button onPress={() => navigation.navigate('DrawerOpen')} title="Drawer open" />,
    }),
  },
);

export default DrawerNavigation;
