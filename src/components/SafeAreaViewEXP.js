import React from "react";
import { Text, View, SafeAreaView } from "react-native";

export default function SafeAreaViewEXP() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 20 }}>
          Example of SafeArea in Recat Native
        </Text>
        <Text style={{ fontSize: 20 }}>
          Test Test Test Test Test Test Test Test Test Test Test Test Test Test
          Test Test Test Test Test Test Test Test Test Test Test Test Test Test
          Test Test Test Test Test Test Test Test Test Test Test Test Test Test
          Test Test Test Test Test Test{" "}
        </Text>
      </View>
    </SafeAreaView>
  );
}
