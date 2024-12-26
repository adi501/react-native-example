import React from 'react';
import { View,StyleSheet } from 'react-native';
import StylingEXP1 from './src/components/StylingEXP1'

 const  App=()=> {
  return (
    <View style={styles.container}>
      <StylingEXP1/>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:80
  },
});