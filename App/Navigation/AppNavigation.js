import { StackNavigator } from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";
import SplashScreen from "../Containers/SplashScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    SplashScreen: { screen: SplashScreen }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "SplashScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default PrimaryNav;
