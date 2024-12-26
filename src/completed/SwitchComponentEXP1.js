import React, { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

const SwitchComponentEXP1 = () => {
  const [SwitchOnValueHolder, setSwitchOnValueHolder] = useState(false);

  const ShowAlert = value => {
    setSwitchOnValueHolder(value);
    if (value === true) {
      alert("Switch is On.");
    } else {
      alert("Switch is Off.");
    }
  };
  return (
    <View style={styles.MainContainer}>
      <Text> Switch Component example </Text>

      <Text> Switch </Text>
      <Switch
        onValueChange={value => ShowAlert(value)}
        style={{ marginBottom: 10 }}
        value={SwitchOnValueHolder}
      />
    </View>
  );
};
export default SwitchComponentEXP1;
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    alignItems: "center"
  }
});
