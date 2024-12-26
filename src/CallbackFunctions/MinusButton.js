// MinusButton
import React from "react";
import { Button } from "react-native";
const MinusButton = ({ decreaseCount }) => {
  return <Button onPress={decreaseCount} title="Minus Button" />;
};
export default MinusButton;
