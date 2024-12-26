import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";

const DetectDeviceIsAndroidOrIOS = () => {
  return (
    <View style={styles.MainContainer}>
      <Text>Detect Device is Android or iOS Load Different Component</Text>
      {Platform.OS === "ios" ? (
        <Text style={styles.TextStyle}> This is iOS Device. </Text>
      ) : (
        <Text style={styles.TextStyle}> This is Android Device. </Text>
      )}
    </View>
  );
};

export default DetectDeviceIsAndroidOrIOS;
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10
  },
  TextStyle: {
    fontSize: 24,
    textAlign: "center"
  }
});
