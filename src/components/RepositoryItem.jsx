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

const Box =({k,value}) =>{

    return(
      <View style={{padding:10}}>
        <Text>{value}</Text>
        <Text>{k}</Text> 
      </View>
    )

}
const RepositoryItem = ({
  fullName,
  language,
  id,
  stargazersCount,
  ownerAvatarUrl,
  forksCount,
  ratingAverage,
  reviewCount
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
      <View style={{flexDirection:'row'}}>
      <Box k={'Stars'} value={stargazersCount}/>
      <Box k={'forks'} value={forksCount}/>
      <Box k={'review'} value={reviewCount}/>
      <Box k={'rating'} value={ratingAverage}/>
      </View>
    </View>
  );
};

export default RepositoryItem;
