import React from "react";
import { Button, View, Text } from "react-native";

const callFun = () => {
  alert("Clicked on Button!!!");
};

const ButtonEXP1 = () => {
  return (
    <View>
      <Text> Button example</Text>
      <Button onPress={callFun} title="Test Button" color="#0000FF" />
    </View>
  );
};
export default ButtonEXP1;
