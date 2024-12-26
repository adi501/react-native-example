import React from "react";
import { Image, Text,View } from "react-native";

const DisplayOnlineImage = () => {
  let Image_Http_URL = {
    uri:
      "http://allinoneweb.net/Including/Images/home/logo.png"
  };

  return (
    <View>
      <Text>Display image in react native from online URL example</Text>
      <Image
        style={{ height: 200, width: 350, resizeMode: "stretch" }}
        source={Image_Http_URL}
      />
    </View>
  );
};

export default DisplayOnlineImage;
