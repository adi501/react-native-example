import React, { Component } from "react";
import { Text, View } from "react-native";
import PropsChildEXP2 from "./PropsChildEXP2";

class PropsParentEXP2 extends Component {
  state = {
    myState: "adi"
  };
  updateState = () => {
    this.setState({ myState: "The state is updated" });
  };

  render() {
    return (
      <View>
        <Text>
          <Text>
            Props With Parent and Child & Update Parent State from Child{" "}
          </Text>
          <PropsChildEXP2
            myState={this.state.myState}
            updateState={this.updateState}
          />
        </Text>
      </View>
    );
  }
}
export default PropsParentEXP2;
