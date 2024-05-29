import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Constants  from 'expo-constants';
import { Entypo } from '@expo/vector-icons';

const data =[
  {
    id: 1,
    title: "Introduction",
    subTitle: "Lorem ipsum dolor sit amet, consecteur adipiscing elit.",
    icon: <Entypo name="video" size={50} color="#6B53FF" />
  },
  {
    id: 2,
    title: "The Language Of Colour",
    subTitle: "Lorem ipsum dolor sit amet, consecteur adipiscing elit.",
    icon: <Entypo name="video" size={50} color="#6B53FF" />
  },
  {
    id: 3,
    title: "The Psychology Of Colour",
    subTitle: "Lorem ipsum dolor sit amet, consecteur adipiscing elit.",
    icon: <Entypo name="video" size={50} color="#6B53FF" />
  },
  {
    id: 4,
    title: "The Psychology Of Colour",
    subTitle: "Lorem ipsum dolor sit amet, consecteur adipiscing elit.",
    icon: <Entypo name="video" size={50} color="#6B53FF" />
  },
];
const SaveScreen = () => {
  return (
    <View style={styles.main}>
    <View style={styles.textContainer}>
      <Text style={styles.text}>Multimedia</Text>
    </View>
    <View>
      <Text style={styles.subText}>Lorem ipsum dolor sit amet, consecteur adipiscing elit.</Text>
    </View>
      <View style={styles.imageContainer}>
      <Image source={require("../assets/Book.png")}/>

      </View>
      <View>
        <Text style={styles.courseText}>Course Details</Text>
      </View>
      <View>
        <FlatList data = {data}
          keyExtractor={data => data.id.toString()}
          renderItem={({item}) => 
              <TouchableOpacity>
                     {/** FlatList Containers Starts Here*/}
      
                    
                  <View style={styles.listContainer}>
        {/** Icon Container */}
                    <View style={{marginRight:15}}>
               {item.icon}
                 </View>
        
        <View>
            <View>
                <Text style={{fontSize:30, fontWeight:"600", marginRight:30}}>{item.title}</Text>
            </View>
        <View style={{marginTop:2}}>
            <Text style={{color:"#878787", marginRight:80}}>{item.subTitle}</Text>
        </View>
      </View>
        

        </View>
        {/** FlatList Containers Ends Here*/}

              </TouchableOpacity>
      
      }
      
      />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  main:{
    paddingTop: Constants.statusBarHeight
  },
  text:{
    fontSize: 30,
    color: "#6B53FF",
    fontWeight:"600",
    marginLeft:30
  },
  textContainer:{
    padding: 20,
  },
  subText:{
    fontSize: 29,
    padding: 15,
    fontWeight:"700",
    fontStyle:"italic",
    marginLeft:30
    
  },
  imageContainer:{
    marginTop:10,
    alignItems:"center"
  },
  courseText:{
    fontSize: 25,
    paddingLeft:30,
    marginTop:30,
    fontWeight:"600"
  },
  listContainer:{
    flexDirection:"row",
    alignItems:"center",
    marginLeft:10,
    margin:10
    
  }
  
});
export default SaveScreen