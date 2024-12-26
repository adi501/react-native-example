import React from "react";
import { StyleSheet, Platform, View, Text } from "react-native";

const CurrencySymbolsEXP = () => {
  return (
    <View style={styles.MainContainer}>
      <Text>Currency Symbols example</Text>
      <Text style={styles.text}> Doller = {"\u0024"} </Text>
      <Text style={styles.text}> Rupees = {"\u20B9"} </Text>
      <Text style={styles.text}> Euro = {"\u20AC"} </Text>
      <Text style={styles.text}> Japanese yen = {"\u00A5"} </Text>
      <Text style={styles.text}> Pound sterling = {"\u00A3"} </Text>
    </View>
  );
};
export default CurrencySymbolsEXP;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#000",
    fontSize: 15
  }
});
