import React from "react";
import { Text, View } from "react-native";

const PropsChildEXP2 = props => {
  return (
    <View>
      <Text onPress={props.updateState}>{props.myState}</Text>
    </View>
  );
};
export default PropsChildEXP2;
