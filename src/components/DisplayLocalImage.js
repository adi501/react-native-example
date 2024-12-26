import React from "react";
import { Image, Text ,View} from "react-native";

const DisplayLocalImage = () => {
  return (
    <View>
      <Text>Display Local folder image in react native example</Text>
      <Image
        style={{ height: 200, width: 350, resizeMode: "stretch" }}
        source={require("../Images/logo.png")}
      />
    </View>
  );
};

export default DisplayLocalImage;
