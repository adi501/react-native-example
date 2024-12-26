import React from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";

const FlatListEXP1 = () => {
  const FlatListItems = [
    { key: "1" },
    { key: "2" },
    { key: "3" },
    { key: "4" },
    { key: "5" },
    { key: "6" },
    { key: "7" },
    { key: "8" },
    { key: "9" },
    { key: "10" },
    { key: "11" },
    { key: "12" },
    { key: "13" },
    { key: "14" },
    { key: "15" },
    { key: "16" },
    { key: "17" },
    { key: "18" }
  ];

  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#FF0012"
        }}
      />
    );
  };

  const GetItem = item => {
    alert(item);
  };
  return (
    <View style={styles.MainContainer}>
      <FlatList
        data={FlatListItems}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={({ item }) => (
          <Text style={styles.item} onPress={GetItem.bind(this, item.key)}>
            {" "}
            {item.key}{" "}
          </Text>
        )}
      />
    </View>
  );
};
export default FlatListEXP1;
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
