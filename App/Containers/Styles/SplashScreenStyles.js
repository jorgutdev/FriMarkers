import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  videoContainer: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
  },
  backgroundVideo: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
});
