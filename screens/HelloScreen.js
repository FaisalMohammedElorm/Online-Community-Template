import { View, Text, StyleSheet, FlatList , Image} from 'react-native'
import React from 'react'
import Constants from "expo-constants";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const pictures =[{
id: 1,
image: require("../assets/Group 18.png")
},
{
  id: 2,
  image: require("../assets/Group 21.png")
},
{
  id: 3,
  image: require("../assets/Group 20.png")
},
{
  id: 4,
  image: require("../assets/Group 19.png")
},


];
const Item = ({title, subTitle, image, id}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subTitle}>{subTitle}</Text>
    {image && <Image style={styles.image} source={image}/>}
  </View>
);

const HelloScreen = () => {
  return (
    <View style={styles.entireScreen}>
    <View style={styles.textContainer}>
      <Text style={styles.text}>Hello, Faisal</Text>
      <View style={styles.iconContainer}>
      <Feather name="search" size={36} color="#070a2e" />
      <AntDesign name="user" size={36} color="#070a2e" />
      </View>
      
    </View>
    <View style={styles.bottomTextContainer}>
      <Text style={styles.bottomText}>Lorem ipsum dolor sit amet, consecteur adipiscing elit</Text>
      
      </View>
      <View style={styles.flatList}>
      <FlatList
        data={pictures}
        keyExtractor={pictures => pictures.id.toString()}
        renderItem={({item}) => <Item image={item.image} />}
        contentContainerStyle={styles.flatListContent}
        numColumns={2}
      />
       


      </View>

  

    </View>
  )
}
const styles = StyleSheet.create({
  entireScreen:{
    paddingTop: Constants.statusBarHeight
  },
  
  textContainer:{
    flexDirection: "row",
    paddingLeft:20,
    marginTop:20,
    justifyContent: "space-between",
  },
  text:{
    fontSize: 30,
    justifyContent:"flex-start",
    fontWeight: "700",
    color:"#6B53FF"
  },
  iconContainer:{
    flexDirection:"row",
    justifyContent:"space-around",
    paddingRight:20,
  },
  bottomTextContainer:{
    marginTop:50,
    paddingLeft:25,
  },
  bottomText:{
    fontSize: 35,
    fontWeight:"600",

  },
  flatList:{
    margin:10
    
    
  },
  flatListContent:{
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:10,
    alignContent:"space-between"
    
   
    
  },
  item:{
    margin: 15
  }

});
export default HelloScreen