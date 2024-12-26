import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

const callFun = () => {
  alert("Clicked on Touchable Opacity Button!!!");
};

const TouchableOpacityEXP1 = () => {
  return (
    <View>
      <Text> TouchableOpacity with Single Line text example</Text>
      <TouchableOpacity onPress={callFun}>
        <Text>Touchable Opacity Button</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TouchableOpacityEXP1;
