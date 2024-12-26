import React from "react";
import { StyleSheet, Platform, WebView, Text } from "react-native";

const EnableJavaScriptInWebView = () => {
  return (
    <>
      <Text>Enable Disable JavaScript Code in WebView</Text>
      <WebView
        javaScriptEnabled={false}
        style={styles.WebViewStyle}
        source={{ uri: "https://Google.com" }}
        domStorageEnabled={true}
      />
    </>
  );
};
export default EnableJavaScriptInWebView;
const styles = StyleSheet.create({
  WebViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: Platform.OS === "ios" ? 20 : 0
  }
});
