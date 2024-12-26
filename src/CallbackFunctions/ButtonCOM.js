import React from "react";
import { Button } from "react-native";
const ButtonCOM = ({ title, decreaseCount }) => {
  return <Button onPress={decreaseCount} title={title} />;
};
export default ButtonCOM;
