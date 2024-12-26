import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

class ScrollViewEXP1 extends Component {
  state = {
    names: [
      { name: "aaaa", id: 1 },
      { name: "bbbb", id: 2 },
      { name: "cccc", id: 3 },
      { name: "dddd", id: 4 },
      { name: "eeee", id: 5 },
      { name: "ffff", id: 6 },
      { name: "gggg", id: 7 },
      { name: "hhhh", id: 8 },
      { name: "iiii", id: 9 },
      { name: "jjjj", id: 10 },
      { name: "kkkk", id: 11 },
      { name: "llll", id: 12 },
      { name: "mmmm", id: 13 },
      { name: "nnnn", id: 14 }
    ]
  };
  render() {
    return (
      <View>
        <Text>ScrollView example</Text>
        <ScrollView>
          <View style={{ flex: 1 }}>
            {this.state.names.map((item, index) => (
              <View key={item.id} style={styles.item}>
                <Text>{item.name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default ScrollViewEXP1;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    margin: 2,
    borderColor: "#2a4944",
    borderWidth: 1,
    backgroundColor: "#d2f7f1"
  }
});
