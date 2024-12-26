import React from "react";
import { StyleSheet, Image,Text, View } from "react-native";

const BackgroundImageForScreen = () => {
  return (
    <View>
    <Image
      source={require("../Images/logo.png")}
      style={styles.MainContainer}
      >
      {/* <Text>Some Text</Text> */}
      </Image>
      </View>
  );
};
export default BackgroundImageForScreen;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  }
});
