import React from "react";
import {
  Platform,
  StyleSheet,
  View,
  ActivityIndicator,
  Text
} from "react-native";

const ActivityIndicatorEXP1 = () => {
  return (
    <>
      <Text>ActivityIndicator example</Text>
      <View style={styles.MainContainer}>
        <ActivityIndicator size="large" color="#F44336" />
        <ActivityIndicator size="small" color="#E91E63" />
        <ActivityIndicator size="large" color="#00BCD4" />
        <ActivityIndicator size="small" color="#009688" />
        <ActivityIndicator size="large" color="#4CAF50" />
        <ActivityIndicator size="small" color="#FF9800" />
      </View>
    </>
  );
};
export default ActivityIndicatorEXP1;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
