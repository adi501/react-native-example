import React, { Component } from "react";
import { StyleSheet, View, Vibration, Button } from "react-native";
const DURATION = 10000;

export default class VibrationEXP extends Component {
  StartVibrationFunction = () => {
    Vibration.vibrate(DURATION);
  };

  StopVibrationFunction = () => {
    Vibration.cancel();
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={{ margin: 10 }}>
          <Button
            title=" Start Vibration "
            onPress={this.StartVibrationFunction}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Button
            title=" Stop Vibration "
            onPress={this.StopVibrationFunction}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10
  }
});
