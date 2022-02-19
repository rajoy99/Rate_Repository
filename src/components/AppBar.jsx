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
      <Pressable onPress={()=>5}>
          Repo List
      </Pressable>
    </View>
  );
};

export default AppBar;
