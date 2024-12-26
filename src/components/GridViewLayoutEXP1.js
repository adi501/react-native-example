import React from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";

const GridViewLayoutEXP1 = () => {
  const Items = [
    { key: "Item 1" },
    { key: "Item 2" },
    { key: "Item 3" },
    { key: "Item 4" },
    { key: "Item 5" },
    { key: "Item 6" },
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
    { key: "18" },
    { key: "19" },
    { key: "20" }
  ];
  const GetGridViewItem = item => {
    alert(item);
  };

  return (
    <View style={styles.MainContainer}>
      <FlatList
        data={Items}
        renderItem={({ item }) => (
          <View style={styles.GridViewBlockStyle}>
            <Text
              style={styles.GridViewInsideTextItemStyle}
              onPress={GetGridViewItem.bind(this, item.key)}
            >
              {" "}
              {item.key}{" "}
            </Text>
          </View>
        )}
        numColumns={3}
      />
    </View>
  );
};
export default GridViewLayoutEXP1;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10
  },
  GridViewBlockStyle: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    height: 100,
    margin: 5,
    backgroundColor: "#FFBCD4"
  },
  GridViewInsideTextItemStyle: {
    color: "#fff",
    padding: 10,
    fontSize: 18,
    justifyContent: "center"
  }
});
