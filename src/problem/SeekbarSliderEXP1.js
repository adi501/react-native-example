import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";

const SeekbarSliderEXP1 = () => {
  const [data, setData] = useState(0);
  return (
    <View>
      <Text>Seekbar Slider example</Text>
      <Text>Slider Value = {data}</Text>
      <Slider
        step={1}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#009688"
        onValueChange={ChangedValue => setData(ChangedValue)}
        style={{ width: "100%" }}
      />
    </View>
  );
};
export default SeekbarSliderEXP1;
// const styles = StyleSheet.create({
//   MainContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     flex: 1,
//     margin: 10
//   }
// });
