import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import Text from "./Text";
import AppBar from "./AppBar";
import { NativeRouter } from "react-router-native";
import { Link, Route, Routes, Navigate } from "react-router-native";
import SignIn from "./SignIn";


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
  flexContainer: {
    display: "flex",
  },
  flexItemA: {
    flexGrow: 10,
    backgroundColor: "#faa",
  },
  flexItemB: {
    flexGrow: 10,
    backgroundColor: "blue",
  },
});

const FlexboxExample = () => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexItemA}>
        <Text>Flex item A</Text>
      </View>
      <View style={styles.flexItemB}>
        <Text>Flex item B</Text>
      </View>
    </View>
  );
};

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
        <Routes>
          <Route path="/" element={<RepositoryList />} exact />
          <Route path="/signin" element={<SignIn />} exact />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </View>
  );
};

export default Main;
