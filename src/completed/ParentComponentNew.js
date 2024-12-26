import React, { Component } from "react";
import { View, Text } from "react-native";
import ButtonCOM from "./ButtonCOM";

class ParentComponentNew extends Component {
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
        <ButtonCOM decreaseCount={this.increaseCount} title="increase" />
        <ButtonCOM decreaseCount={this.decreaseCount} title="decrease" />
      </View>
    );
  }
}
export default ParentComponentNew;
