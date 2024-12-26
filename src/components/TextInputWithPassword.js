import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

const TextInputWithPassword = () => {
  return (
    <View>
      <Text> TextInput Type Style for Password example </Text>
      <TextInput
        secureTextEntry={true}
        placeholder="Text Input For Password"
        underlineColorAndroid="transparent"
        style={styles.TextInputStyle}
      />
    </View>
  );
};
export default TextInputWithPassword;
const styles = StyleSheet.create({
  TextInputStyle: {
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: "#FF0000",
    borderRadius: 6
  }
});
