import React from "react";
import { StyleSheet, Image } from "react-native";

const BackgroundImageForScreen = () => {
  return (
    <Image
      source={require("../Images/logo.png")}
      style={styles.MainContainer}
    />
  );
};
export default BackgroundImageForScreen;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: null,
    height: null
  }
});
