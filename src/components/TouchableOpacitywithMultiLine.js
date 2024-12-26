import React from "react";
import { TouchableOpacity, View, Text,StyleSheet } from "react-native";

const callFun = () => {
  alert("Clicked on Touchable Opacity Multiple Line Text Button!!!");
};

const TouchableOpacitywithMultiLine = () => {
  return (
    <View>
      <Text> TouchableOpacity with Multiple Line text example</Text>
      <TouchableOpacity onPress={callFun} style={styles.myStyle}>
        <Text>Touchable Opacity Button Line1</Text>
        <Text>Touchable Opacity Button Line2</Text>
        <Text>Touchable Opacity Button Line3</Text>
        <Text>Touchable Opacity Button Line4</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TouchableOpacitywithMultiLine;
const styles = StyleSheet.create({
  myStyle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    backgroundColor:'#ff0000',
    padding:20
  }
});