import React from "react";
import { StyleSheet, Platform, View, Text } from "react-native";
const SuperScriptSubScriptTextEXP = () => {
  return (
    <View style={styles.MainContainer}>
      <Text>SuperScript SubScript Text example</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 20, lineHeight: 30, color: "#000" }}>A</Text>
        <Text style={{ fontSize: 11, lineHeight: 18, color: "#000" }}>2</Text>
        <Text style={{ fontSize: 20, lineHeight: 30, color: "#000" }}>+</Text>
        <Text style={{ fontSize: 20, lineHeight: 30, color: "#000" }}>B</Text>
        <Text style={{ fontSize: 11, lineHeight: 18, color: "#000" }}>2</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 20, lineHeight: 30, color: "#000" }}>H</Text>
        <Text style={{ fontSize: 11, lineHeight: 37, color: "#000" }}>2</Text>
        <Text style={{ fontSize: 20, lineHeight: 30, color: "#000" }}>S</Text>
        <Text style={{ fontSize: 20, lineHeight: 30, color: "#000" }}>O</Text>
        <Text style={{ fontSize: 11, lineHeight: 37, color: "#000" }}>4</Text>
      </View>
    </View>
  );
};
export default SuperScriptSubScriptTextEXP;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    margin: 10
  }
});
