import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

const RetrieveTextboxValueOnButton = () => {
  const [data, setData] = useState("");
  const GetValueFunction = () => {
    alert(data);
    // console.log(data);
  };

  return (
    <View>
      <Text> Retrieve TextInput Data on Button Click example</Text>
      <TextInput
        placeholder="Enter Text here"
        onChangeText={text => setData(text)}
        value={data}
        style={{
          textAlign: "center",
          borderColor: "gray",
          borderWidth: 3,
          height: 50
        }}
      />
      <Button
        title="Get Text Input Value"
        color="#0000FF"
        onPress={GetValueFunction}
      />
    </View>
  );
};
export default RetrieveTextboxValueOnButton;
