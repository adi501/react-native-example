import React from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";

const ImageIconInsideTextInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.SectionStyle}>
        <Image
          source={require("../Images/logo.png")}
          style={styles.ImageStyle}
        />
        <TextInput
          style={{ flex: 1 }}
          placeholder="Enter Your Name"
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
};

export default ImageIconInsideTextInput;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },

  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 40,
    borderRadius: 5,
    margin: 10
  },

  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center"
  }
});
