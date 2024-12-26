import React from "react";

import { StyleSheet, View, Button } from "react-native";

const GetCurrentDateWithMonthYear = () => {
  const ShowCurrentDate = () => {
    var date = new Date();
    alert(date);
  };
  const ShowDate = () => {
    var date = new Date().getDate();
    alert(date);
  };
  const ShowMonth = () => {
    var month = new Date().getMonth() + 1;
    alert(month);
  };
  const ShowYear = () => {
    var year = new Date().getFullYear();
    alert(year);
  };

  return (
    <View style={styles.MainContainer}>
      <View style={styles.ButtonStyle}>
        <Button title="Show Current Date" onPress={ShowCurrentDate} />
      </View>
      <View style={styles.ButtonStyle}>
        <Button title="Show Date" onPress={ShowDate} />
      </View>
      <View style={styles.ButtonStyle}>
        <Button title="Show Month" onPress={ShowMonth} />
      </View>
      <View style={styles.ButtonStyle}>
        <Button title="Show Year" onPress={ShowYear} />
      </View>
    </View>
  );
};
export default GetCurrentDateWithMonthYear;
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: "#F5FCFF",
    margin: 10
  },
  ButtonStyle: {
    flex: 1,
    marginVertical: 10
  }
});
