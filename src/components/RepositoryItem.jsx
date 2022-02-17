import { FlatList,Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,

  },
  item:{
    backgroundColor:'#ff02',
    flexDirection:'column',
    flexGrow:20
  }
});

const RepositoryItem = ({fullName,language,id,stargazersCount}) => {

    return(
        <View style={styles.item}> 
            <Text> Dev ID : {id}</Text>
            <Text> Dev Name : {fullName} </Text>
            <Text>Favorite Language : {language} </Text>
            <Text>Stars : {stargazersCount} </Text>
        </View>
    )

}

export default RepositoryItem