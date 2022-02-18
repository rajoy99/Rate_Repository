import Main from "./src/components/Main";
import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <>
      <NavigationContainer></NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
