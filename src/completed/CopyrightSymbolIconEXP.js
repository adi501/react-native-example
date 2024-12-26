import React from "react";
import { Platform, StyleSheet, View, Text } from "react-native";

const CopyrightSymbolIconEXP = () => {
  return (
    <View style={styles.MainContainer}>
      <Text>Copyright Symbol © Icon example</Text>
      <Text style={styles.textStyle}> {"\u00A9"}allinoneweb.net </Text>
    </View>
  );
};
export default CopyrightSymbolIconEXP;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    alignItems: "center",
    justifyContent: "center"
  },

  textStyle: {
    color: "#000",
    fontSize: 20
  }
});
