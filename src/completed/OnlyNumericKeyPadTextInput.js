import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

const OnlyNumericKeyPadTextInput = () => {
  return (
    <View style={styles.MainContainer}>
      <Text>TextInput that only accepts numeric characters</Text>

      <TextInput
        placeholder="Text Input For Numeric Value"
        style={styles.TextInputStyle}
        keyboardType={"numeric"}
      />
    </View>
  );
};
export default OnlyNumericKeyPadTextInput;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10
  },
  TextInputStyle: {
    textAlign: "center"
  }
});
