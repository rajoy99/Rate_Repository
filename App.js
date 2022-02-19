import Main from "./src/components/Main";
import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RepositoryList from "./src/components/RepositoryList";
import SignIn from "./src/components/SignIn";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
