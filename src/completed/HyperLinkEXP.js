import React, { Component } from "react";
import { StyleSheet, Text, View, Linking } from "react-native";

export default class HyperLinkEXP extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text>HyperLink Example</Text>
        <Text
          style={styles.TextStyle}
          onPress={() => Linking.openURL("https://google.com")}
        >
          Click Here To Open Google.
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  TextStyle: {
    color: "#E91E63",
    textDecorationLine: "underline"
  }
});
