import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const UseStateEXP = () => {
  const [data, setData] = useState("hi");
  const updateData = () => {
    setData("New Data");
  };

  return (
    <View>
      <Text>useState EXP</Text>
      <Text>Data:{data}</Text>
      <Button title="Change Data" onPress={updateData} />
    </View>
  );
};

export default UseStateEXP;
