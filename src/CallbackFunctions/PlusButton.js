// PlusButton
import React from "react";
import { Button } from "react-native";

const PlusButton = ({ increaseCount }) => {
  return <Button onPress={increaseCount} title="Plus Button" />;
};
export default PlusButton;
