import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

class MapEXP1 extends Component {
  state = {
    names: [
      {
        id: 0,
        name: "Adi"
      },
      {
        id: 1,
        name: "Pavan"
      },
      {
        id: 2,
        name: "Nani"
      },
      {
        id: 3,
        name: "Balu"
      },
      {
        id: 5,
        name: "xyz"
      },
      {
        id: 6,
        name: "abc"
      }
    ]
  };
  alertItemName = item => {
    alert(item.name);
  };
  render() {
    return (
      <View>
        {this.state.names.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.container}
            onPress={() => this.alertItemName(item)}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
export default MapEXP1;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: "#E9967A",
    alignItems: "center"
  },
  text: {
    color: "#4f603c"
  }
});
