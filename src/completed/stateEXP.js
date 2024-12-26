import React from "react";
import { Text, View } from "react-native";

class stateEXP extends React.Component {
  state = {
    myState: "Adi"
  };
  render() {
    return (
      <View>
        <Text>State example</Text>

        <Text> {this.state.myState}</Text>
      </View>
    );
  }
}
export default stateEXP;
