import React, { Component } from "react";

import { StyleSheet, View, WebView, Platform, Text } from "react-native";

export default class YouTubeVideoEXP extends Component {
  render() {
    return (
      <>
        <Text>YouTube Video Display Example</Text>
        <View style={{ height: 300 }}>
          <WebView
            style={styles.WebViewContainer}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{ uri: "https://www.youtube.com/embed/dFKhWe2bBkM" }}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  WebViewContainer: {
    marginTop: Platform.OS == "ios" ? 20 : 0
  }
});
