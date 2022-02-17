import { FlatList,Text, View, StyleSheet,Image } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,

  },
  item:{
    backgroundColor:'#af4',
    justifyContent:'center',
    flexGrow:20,
    padding:2,
    marginBottom:40
  }
});

const RepositoryItem = ({ fullName, language, id, stargazersCount,ownerAvatarUrl }) => {
  return (
    <View style={styles.item}>
      <Text> Dev ID : {id}</Text>
      <Image style={{ width: 45, height: 45, borderRadius: 45 / 2 }} source={ownerAvatarUrl}></Image>
      <Text> Dev Name : {fullName} </Text>
      <Text>Favorite Language : {language} </Text>
      <Text>Stars : {stargazersCount} </Text>
    </View>
  );
};

export default RepositoryItem