import React from "react";
import { Dimensions, FlatList, Text, View, StyleSheet } from "react-native";

const data = [
  { id: "a", value: "A" },
  { id: "b", value: "B" },
  { id: "c", value: "C" },
  { id: "d", value: "D" },
  { id: "e", value: "E" },
  { id: "f", value: "F" }
];
const numColumns = 3;
const size = Dimensions.get("window").width / numColumns;
console.log(size);
const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  itemContainer: {
    width: size,
    height: size
  },
  item: {
    flex: 1,
    margin: 3,
    backgroundColor: "lightblue"
  }
});

function Grid() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.value}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={numColumns}
      />
    </View>
  );
}
export default Grid;
