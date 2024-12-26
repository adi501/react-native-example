import React from "react";
import { Image, Text } from "react-native";

const DisplayOnlineImage = () => {
  let Image_Http_URL = {
    uri:
      "http://4.bp.blogspot.com/-Pidu-b8Qg1A/XhjQgA-N0tI/AAAAAAAAcy0/T6UjyGKcCFsCM-IIh_8O3pMQFSnjBcZqgCK4BGAYYCw/s1600/logo.png"
  };

  return (
    <view>
      <Text>Display image in react native from online URL example</Text>
      <Image
        style={{ height: 200, width: 350, resizeMode: "stretch" }}
        source={Image_Http_URL}
      />
    </view>
  );
};

export default DisplayOnlineImage;
