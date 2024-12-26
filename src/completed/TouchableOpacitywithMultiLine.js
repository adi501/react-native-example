import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

const callFun = () => {
  alert("Clicked on Touchable Opacity Multiple Line Text Button!!!");
};

const TouchableOpacitywithMultiLine = () => {
  return (
    <View>
      <Text> TouchableOpacity with Multiple Line text example</Text>
      <TouchableOpacity onPress={callFun}>
        <Text>Touchable Opacity Button Line1</Text>
        <Text>Touchable Opacity Button Line2</Text>
        <Text>Touchable Opacity Button Line3</Text>
        <Text>Touchable Opacity Button Line4</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TouchableOpacitywithMultiLine;
