import React from "react";
import { Button, Text, View } from "react-native";

const onClickEvent = (id, name) => e => {
  alert(id);
  alert(name);
};

const PassingParameterViaOnclick = () => {
  return (
    <View>
      <Text>React passing parameter via onclick event </Text>
      <Button
        title="Submit"
        value="buttonValue"
        onPress={onClickEvent(10, "Adi")}
      />
    </View>
  );
};

export default PassingParameterViaOnclick;
