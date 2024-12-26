import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const ButtonWithRoundedCorner = () => {
  return (
    <View>
      <Text>Button With Rounded Corner example</Text>
      <Button title="Test Button" style={styles.ButtonStyleClass} />
    </View>
  );
};
export default ButtonWithRoundedCorner;

const styles = StyleSheet.create({
  ButtonStyleClass: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#00BCD4",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  }
});
