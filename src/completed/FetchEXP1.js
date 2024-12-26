import React, { Component } from "react";

import { StyleSheet, View, Button } from "react-native";

export default class FetchEXP1 extends Component {
  getDataUsingGet() {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "GET"
    })
      .then(response => response.json())
      .then(responseJson => {
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      .catch(error => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Button title="Get Data Using GET" onPress={this.getDataUsingGet} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10
  }
});
