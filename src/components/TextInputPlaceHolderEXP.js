import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

const TextInputPlaceHolderEXP = () => {
  return (
    <View style={styles.MainContainer}>
      <Text>TextInput PlaceHolder example</Text>
      <TextInput
        placeholder="Enter Your Name"
        style={styles.textInput_Style}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};
export default TextInputPlaceHolderEXP;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  textInput_Style: {
    width: "90%",
    height: 42,
    borderColor: "#009688",
    borderWidth: 1,
    backgroundColor: "#fff",
    textAlign: "center"
  }
});
