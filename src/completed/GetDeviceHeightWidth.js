import React from "react";
import { StyleSheet, View, Button, Dimensions } from "react-native";

const GetDeviceHeightWidth = () => {
  const GetHeightFunction = () => {
    const Height_Holder = Dimensions.get("window").height;
    alert("Device Height: " + Height_Holder);
  };
  const GetWidthFunction = () => {
    const Width_Holder = Dimensions.get("window").width;
    alert("Device Width: " + Width_Holder);
  };
  return (
    <View style={styles.MainContainer}>
      <View style={styles.ButtonStyle}>
        <Button
          title="Click Here To Show Device Height"
          onPress={GetHeightFunction}
        />
      </View>
      <View style={styles.ButtonStyle}>
        <Button
          title="Click Here To Show Device Width"
          onPress={GetWidthFunction}
        />
      </View>
    </View>
  );
};
export default GetDeviceHeightWidth;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
    margin: 10
  },

  ButtonStyle: {
    margin: 10
  }
});
