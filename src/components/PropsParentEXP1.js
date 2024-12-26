import React from "react";
import { Text, View } from "react-native";
import PropsChildEXP1 from "./PropsChildEXP1"

const PropsParentEXP1 = () => {
  const mydata = "Data from Parent to Child";
  return (
    <View>
      <Text>
        <Text>Data sending from Parent to Child Component using Props </Text>
        <PropsChildEXP1 mydata={mydata} />
      </Text>
    </View>
  );
};
export default PropsParentEXP1;
