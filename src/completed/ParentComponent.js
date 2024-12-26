// ParentComponent
import React, { Component } from "react";
import { View, Text } from "react-native";
import MinusButton from "./MinusButton";
import PlusButton from "../components/PlusButton";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increaseCount = e => {
    this.setState({ count: this.state.count + 1 });
  };
  decreaseCount = e => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <View>
        <Text>{this.state.count}</Text>
        <PlusButton increaseCount={this.increaseCount} />
        <MinusButton decreaseCount={this.decreaseCount} />
      </View>
    );
  }
}
export default ParentComponent;
