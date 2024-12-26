import React from "react";
import { Text, View } from "react-native";

class StateWithUpdateEXP extends React.Component {
  state = {
    myState: "Adi"
  };
  updateState = () => this.setState({ myState: "The state is updated" });
  render() {
    return (
      <View>
        <Text>State With Update example</Text>
        <Text onPress={this.updateState}>{this.state.myState}</Text>
      </View>
    );
  }
}
export default StateWithUpdateEXP;
