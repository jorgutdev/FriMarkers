import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import { Images } from '../Themes';
import Video from 'react-native-video';
// Styles
import styles from './Styles/SplashScreenStyles';

export default class LaunchScreen extends Component {
  render() {
    return (
      <View style={styles.rootContainer}>
        <Video
          source={{
            uri: 'https://github.com/mediaelement/mediaelement-files/raw/master/big_buck_bunny.mp4',
          }} // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref;
          }} // Store reference
          rate={1.0} // 0 is paused, 1 is normal.
          volume={0.0} // 0 is muted, 1 is normal.
          muted // Mutes the audio entirely.
          paused={false} // Pauses playback entirely.
          resizeMode="cover" // Fill the whole screen at aspect ratio.*
          repeat // Repeat forever.
          playInBackground={false} // Audio continues to play when app entering background.
          playWhenInactive={false} // [iOS] Video continues to play when control or notification center are shown.
          ignoreSilentSwitch="ignore" // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
          progressUpdateInterval={250.0} // [iOS] Interval to fire onProgress (default to ~250ms)
          onLoadStart={this.loadStart} // Callback when video starts to load
          onLoad={this.setDuration} // Callback when video loads
          onProgress={this.setTime} // Callback every ~250ms with currentTime
          onEnd={this.onEnd} // Callback when playback finishes
          onError={this.videoError} // Callback when video cannot be loaded
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onTimedMetadata={this.onTimedMetadata} // Callback when the stream receive some metadata
          style={styles.backgroundVideo}
        />
        <View>
          <Text style={styles.title}>Whatever</Text>
        </View>
      </View>
    );
  }
}
