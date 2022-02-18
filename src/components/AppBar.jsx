import { Pressable,Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Link, Route, Routes, Navigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor:'#24292e',
    flexGrow:1,
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:10
    // ...
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text> Great News</Text>
    </View>
  );
};

export default AppBar;
