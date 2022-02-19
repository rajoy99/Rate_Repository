import { Pressable,Text, ScrollView, View, StyleSheet, TouchableWithoutFeedback} from "react-native";
import Constants from "expo-constants";
import { Link, Route, Routes, Navigate } from 'react-router-native';
import Subheading from "./Subheading";

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

const AppBarTab = ({ children, link, onPress }) => (
  <Link
    onPress={onPress}
    to={link}
    component={TouchableWithoutFeedback}
    activeOpacity={0.8}
  >
    <Subheading style={styles.tab} color="textLight">
      {children}
    </Subheading>
  </Link>
);



const AppBar = () => {
  return (
    <View style={styles.container}>
 <ScrollView>
 <AppBarTab link="/">Repositories</AppBarTab>
        <AppBarTab link="/signin">Sign in</AppBarTab>
 </ScrollView>
    </View>
  );
};

export default AppBar;
