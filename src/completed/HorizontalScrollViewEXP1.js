import React from "react";
import { Text, View, ScrollView } from "react-native";

const HorizontalScrollViewEXP1 = () => {
  return (
    <View>
      <View>
        <ScrollView horizontal={true}>
          <Text>
            Scroll Me To See The Effect data data data data data data data data
            data data data data data data data
          </Text>
          <Text>=> Scroll View Ends Here.</Text>
        </ScrollView>
      </View>
    </View>
  );
};
export default HorizontalScrollViewEXP1;
