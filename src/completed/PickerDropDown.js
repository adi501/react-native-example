import React from "react";
import { Picker, View, StyleSheet, Text } from "react-native";

export default class PickerDropDown extends React.Component {
  state = { choosenLabel: "", choosenindex: "" };
  render() {
    return (
      <View style={styles.container}>
        <Text>Picker DropDown Example</Text>

        <Text>{this.state.choosenLabel}</Text>
        <Text>{this.state.choosenindex}</Text>
        <Picker
          selectedValue={this.state.choosenLabel}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ choosenLabel: itemValue, choosenindex: itemIndex })
          }
        >
          <Picker.Item label="Hello" value="word1" />
          <Picker.Item label="React" value="word2" />
          <Picker.Item label="Native" value="word3" />
          <Picker.Item label="How" value="word4" />
          <Picker.Item label="are" value="word5" />
          <Picker.Item label="you" value="word6" />
        </Picker>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column"
  }
});
