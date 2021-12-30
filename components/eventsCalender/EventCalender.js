import {WebView} from 'react-native-webview';
import React, {useEffect} from 'react';
import {Dimensions,StyleSheet, Text, ScrollView} from 'react-native';

export default function eventCalender() {
  return (
    <ScrollView style={styles.container11}>
      <WebView
        source={{uri: 'https://livlengroup.github.io/appEventCalenderMAF'}}
        style={styles.video}
        cacheEnabled={false}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container11: {
    flex: 1,
    flexDirection:'column',
    height: 5000,
    // height: '50%',
    // opacity: 0.99,
  },
  video: {
    width: Dimensions.get("window").width,
		// height: Dimensions.get("window").height
    height: 5000,
    
    
    // backgroundColor: 'yellow',
  }
});