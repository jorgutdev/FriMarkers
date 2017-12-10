import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import { Images } from '../Themes';
// Styles
import styles from './Styles/MenuScreenStyles';
import { connect } from 'react-redux';

class MenuScreen extends Component {
  componentWillMount() {}

  render() {
    return (
      <View style={styles.rootContainer}>
        <View>
          <Text style={styles.title}>Menu view</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  // videoBackground: state.metadata.videoBackground,
});

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  // metadataRequest: () => dispatch(MetadataActions.request()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);
