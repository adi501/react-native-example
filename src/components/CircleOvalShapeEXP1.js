import React from "react";
import { StyleSheet, View } from "react-native";

const CircleOvalShapeEXP1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.CircleShapeView} />
      <View style={styles.OvalShapeView} />
    </View>
  );
};
export default CircleOvalShapeEXP1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  CircleShapeView: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: "#FF0000"
  },

  OvalShapeView: {
    marginTop: 20,
    width: 100,
    height: 100,
    backgroundColor: "#FF0000",
    borderRadius: 50,
    transform: [{ scaleX: 2 }]
  }
});
