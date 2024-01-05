import React from "react";
import {View,Text, StyleSheet,ScrollView} from "react-native"
const App = ()=>{
  const users = [
    {
      id:1,
      name:"Dinesh"
    },
    {
      id:2,
      name:"Dinesh kumar"
    },
    {
      id:3,
      name:"dineshyaduvanshee"
    },
    {
      id:4,
      name:"mahesh"
    },
    {
      id:5,
      name:"Ritesh"
    },
    {
      id:6,
      name:"Nilesh"
    },
    {
      id:7,
      name:"Titu"
    },
    {
      id:8,
      name:"shailvi"
    },
    {
      id:9,
      name:"Avani"
    },{
      id:10,
      name:"pari"
    }

    
  ];
  return(
    <View>
      <Text style={{fontSize:30, textAlign:'center', backgroundColor:'purple',color:'#fff'}}>List with Map Function</Text>  
      <ScrollView style={{marginBottom:50}}>
      {
        users.map((item)=><Text style={styles.items}>{item.name}</Text>)
      }
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  items:{
    fontSize:24,
    padding:20,
    color:'purple',
    backgroundColor:'cyan',
    borderColor:'black',
    borderWidth:1,
    margin:5,
    textAlign:'center'
  }
});
export default App;
