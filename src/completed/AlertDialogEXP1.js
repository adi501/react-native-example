import React from "react";
import { StyleSheet, View, Button } from "react-native";

const AlertDialogEXP1 = () => {
  const ShowAlertDialog = () => {
    alert("Alert Dialog Title", "Alert Dialog Message", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later Button Clicked")
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Button Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK ButtonPressed") }
    ]);
  };
  return (
    <View style={styles.MainContainer}>
      <Button title="Show Alert Dialog " onPress={ShowAlertDialog} />
    </View>
  );
};
export default AlertDialogEXP1;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10
  }
});
