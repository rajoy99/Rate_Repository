import { Pressable,Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor:'#24292e',
    flexGrow:1
    // ...
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={{color:'white',fontSize:28}}>Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
