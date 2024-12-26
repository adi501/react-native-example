import React from "react";
import { Text, View, Button, StyleSheet,TouchableHighlight } from "react-native";

const ButtonWithRoundedCorner = () => {
  return (
    <View>
      <Text>Button With Rounded Corner example</Text>
      <TouchableHighlight  style={styles.ButtonStyleClass} >
        <Text style={styles.submitText} >Submit</Text>
      </TouchableHighlight>
    </View>
  );
};
export default ButtonWithRoundedCorner;

const styles = StyleSheet.create({
  ButtonStyleClass: {
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText:{
    color:'#fff',
    textAlign:'center',
}
});
