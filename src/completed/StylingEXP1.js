import React from "react";
import { Text, View, StyleSheet } from "react-native";

const StylingEXP1 = () => {
  return (
    <View>
      <Text>Styling example</Text>
      <Text style={styles.myStyle}>Line 1</Text>
      <Text>Line 2</Text>
      <Text>Line 2</Text>
    </View>
  );
};
export default StylingEXP1;

const styles = StyleSheet.create({
  myStyle: {
    marginTop: 20,
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
    fontSize: 20
  }
});
