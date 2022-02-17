import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import Text from './Text';
import AppBar from './AppBar';


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
  flexContainer: {
    display: 'flex',
  },
  flexItemA: {
    flexGrow: 10,
    backgroundColor: '#faa',
  },
  flexItemB: {
    flexGrow: 10,
    backgroundColor: 'blue',
  }
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
      <Text>Rate Repository Application</Text>
      <Text color="textSecondary">Text with secondary color</Text>
      <RepositoryList />
    </View>
    
  );
};

export default Main;