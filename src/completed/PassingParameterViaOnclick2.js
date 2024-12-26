import React from "react";
import { Button, Text, View } from "react-native";

const onClickEvent = id => {
  alert(id);
};

const PassingParameterViaOnclick2 = () => {
  return (
    <View>
      <Text>
        React passing parameter via onclick event using Arrow function
      </Text>
      <Button
        title="Submit"
        value="buttonValue"
        onPress={() => {
          onClickEvent(10);
        }}
      />
    </View>
  );
};

export default PassingParameterViaOnclick2;
