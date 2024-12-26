import React from "react";
import { StyleSheet, View } from "react-native";

const TriangleShapeViewEXP1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.TriangleShapeCSS} />
    </View>
  );
};
export default TriangleShapeViewEXP1;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  TriangleShapeCSS: {
    width: 0,
    height: 0,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 120,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#FF0000"
  }
});
