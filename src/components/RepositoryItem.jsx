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

const DesBox =({ownerAvatarUrl,fullName,description}) =>{

  return(
    <View style={{padding:10,flexDirection:'row'}}>
      <Image
        key={id}
        style={{ left:4, top: 5, width: 35, height: 35,marginRight:20 }}
        source={{ uri: ownerAvatarUrl }}
      />

      <Text>{fullName} </Text>
    </View>
  )

}

const RepositoryItem = ({
  fullName,
  description,
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
      <DesBox ownerAvatarUrl={ownerAvatarUrl} description={description} fullName={fullName} />
      <Text style={{marginLeft:9}}>{description} </Text>
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
          textAlign:'center',
          marginLeft:7

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
