import React from "react";
import { StyleSheet, WebView, Text } from "react-native";

const RenderRawHTMLCodeInWebView = () => {
  var HtmlCode =
    "<h1> h1 Heading Tag</h1>" +
    "<p> Sample Paragraph Tag </p>" +
    '<img src="http://4.bp.blogspot.com/-Pidu-b8Qg1A/XhjQgA-N0tI/AAAAAAAAcy0/T6UjyGKcCFsCM-IIh_8O3pMQFSnjBcZqgCK4BGAYYCw/s1600/logo.png" alt="Image" width="250" height="150" >';
  return (
    <>
      <Text>Render Raw HTML Code Using WebView</Text>
      <WebView
        style={styles.WebViewStyle}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ html: HtmlCode }}
      />
    </>
  );
};
export default RenderRawHTMLCodeInWebView;

const styles = StyleSheet.create({
  WebViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});
