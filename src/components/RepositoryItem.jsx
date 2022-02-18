import { FlatList, Text, View, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  item: {
    backgroundColor: "white",
    justifyContent: "center",
    flexGrow: 20,
    padding: 2,
    marginBottom: 40,
  },
});

const Box =({key,value}) =>{

    return(
      <View>
        <Text>{value}</Text>
        <Text>{key}</Text> 
      </View>
    )

}
const RepositoryItem = ({
  fullName,
  language,
  id,
  stargazersCount,
  ownerAvatarUrl,
}) => {
  return (
    <View style={styles.item}>
      <Text> Dev ID : {id}</Text>
      <Image
        key={id}
        style={{ left: 25, top: 5, width: 35, height: 35 }}
        source={{ uri: ownerAvatarUrl }}
      />

      <Text> Dev Name : {fullName} </Text>
      <Text numberOfLines={1} style={{flex:1}}>Favorite Language : </Text>
      <Text
        style={{
          borderRadius: 8,
          padding:2,
          height: 25,
          width:80,
          justifyContent: "center",
          alignItems: "center",
          elevation: 5,
          backgroundColor:'blue',
          color:'white',
          textAlign:'center'

        }}
      >
        {language}{" "}
      </Text>
      {/* <Text>Stars : {stargazersCount} </Text> */}
      <Box key={"Stars"} value={stargazersCount}/>
    </View>
  );
};

export default RepositoryItem;
