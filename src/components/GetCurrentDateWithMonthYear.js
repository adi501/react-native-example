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
        <Button title="Show Current Date" style={styles.ButtonStyle} onPress={ShowCurrentDate} />
        <Button title="Show Date" style={styles.ButtonStyle} onPress={ShowDate} />
        <Button title="Show Month" style={styles.ButtonStyle} onPress={ShowMonth} />
        <Button title="Show Year" style={styles.ButtonStyle} onPress={ShowYear} />
    </View>
  );
};
export default GetCurrentDateWithMonthYear;
const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: "#F5FCFF",
    margin: 1
  },
  ButtonStyle: {
    paddingBottom:10
  }
});
