import React from "react";
import { TouchableOpacity, View, Text ,StyleSheet} from "react-native";

const callFun = () => {
  alert("Clicked on Touchable Opacity Button!!!");
};

const TouchableOpacityEXP1 = () => {
  return (
    <View>
      <Text> TouchableOpacity with Single Line text example</Text>
      <TouchableOpacity onPress={callFun} style={styles.myStyle}>
        <Text>Touchable Opacity Button</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TouchableOpacityEXP1;

const styles = StyleSheet.create({
  myStyle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    backgroundColor:'#ff0000',
    padding:20
  }
});
