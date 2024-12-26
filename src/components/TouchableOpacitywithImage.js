import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";

const callFun = () => {
  alert("Clicked on Touchable Opacity with Image Button!!!");
};
let Image_Http_URL = {
  uri:
    "http://4.bp.blogspot.com/-Pidu-b8Qg1A/XhjQgA-N0tI/AAAAAAAAcy0/T6UjyGKcCFsCM-IIh_8O3pMQFSnjBcZqgCK4BGAYYCw/s1600/logo.png"
};

const TouchableOpacitywithImage = () => {
  return (
    <View>
      <Text> TouchableOpacity with Image example</Text>
      <TouchableOpacity onPress={callFun}>
        <Image
          style={{ height: 200, width: 350, resizeMode: "stretch" }}
          source={Image_Http_URL}
        />
      </TouchableOpacity>
    </View>
  );
};
export default TouchableOpacitywithImage;
