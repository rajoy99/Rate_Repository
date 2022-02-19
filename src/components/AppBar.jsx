import {
  Pressable,
  Text,
  ScrollView,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import Constants from "expo-constants";
import { Link, Route, Routes, Navigate } from "react-router-native";
import Subheading from "./Subheading";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    flexGrow: 2,
    flexDirection: "row",
    marginBottom: 10,
    // ...
  },
  tab: {
    paddingRight: 15,
    backgroundColor: "green",
    color: "white",
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
    <View>
      <ScrollView style={styles.container}>
        <AppBarTab link="/">Repositories</AppBarTab>
        <AppBarTab link="/signin">Sign in</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
