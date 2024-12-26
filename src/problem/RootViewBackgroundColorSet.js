import React from "react";
import { Text, View, StyleSheet } from "react-native";

const RootViewBackgroundColorSet = () => {
  return (
    <View style={styles.MainContainer}>
      <Text>View Background Color example </Text>
      <Text>Line 1</Text>
      <Text>Line 2</Text>
      <Text>Line 2</Text>
    </View>
  );
};
export default RootViewBackgroundColorSet;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "#FF0000"
  }
});
