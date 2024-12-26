import React from "react";
import { View, StyleSheet, Text } from "react-native";

const FlexboxEXP1 = props => {
  return (
    <View style={styles.container}>
      <Text>
        Flexbox with flexDirection,justifyContent,alignItems Properties{" "}
      </Text>

      <View style={styles.redbox} />
      <View style={styles.bluebox} />
      <View style={styles.blackbox} />
    </View>
  );
};

export default FlexboxEXP1;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: "red"
  },
  bluebox: {
    width: 100,
    height: 100,
    backgroundColor: "blue"
  },
  blackbox: {
    width: 100,
    height: 100,
    backgroundColor: "black"
  }
});
