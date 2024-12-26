import React from "react";
import { Button, Text, View } from "react-native";

const onClickEvent = message => {
  alert(message);
};

const PassingParameterViaOnclick1 = () => {
  return (
    <View>
      <Text>React passing parameter via onclick event using Bind </Text>
      <Button
        title="Submit"
        value="buttonValue"
        onPress={onClickEvent.bind(this, "hiiii")}
      />
    </View>
  );
};

export default PassingParameterViaOnclick1;
