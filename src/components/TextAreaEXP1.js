import React from "react";
import { Platform, StyleSheet, View, TextInput, Text } from "react-native";

const TextAreaEXP1 = () => {
  return (
    <View style={styles.MainContainer}>
      <Text>Text Area example</Text>
      <TextInput
        style={styles.TextInputStyleClass}
        underlineColorAndroid="transparent"
        placeholder={"Type Something in Text Area."}
        placeholderTextColor={"#9E9E9E"}
        numberOfLines={10}
        multiline={true}
      />
    </View>
  );
};
export default TextAreaEXP1;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    justifyContent: "center"
  },

  TextInputStyleClass: {
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#9E9E9E",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    height: 150
  }
});
