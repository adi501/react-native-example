import React from "react";
import { Image, Text } from "react-native";

const DisplayLocalImage = () => {
  return (
    <view>
      <Text>Display Local folder image in react native example</Text>
      <Image
        style={{ height: 200, width: 350, resizeMode: "stretch" }}
        source={require("../Images/logo.png")}
      />
    </view>
  );
};

export default DisplayLocalImage;
