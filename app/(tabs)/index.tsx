import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Ionicons } from '@expo/vector-icons'
import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Router } from '@react-navigation/native';
import { router,useFocusEffect} from 'expo-router';

const index = () => {
  const[veri,setVeri]=useState({})
  const[yeni,setYeni]=useState(0)
  const[a,seta]=useState(3)
  const[bio,setbio]=useState([
    "hav havla gelme",
    "gökte uçuşan rengarek",
    "amacı dışında kullanıyorum",
    "yıldız teknik CENG",
    "180 cm altı yazmasın",
    "fitnes & kitap okumak",
    "yürüyüş yapmak"
  ])
  const[isim,setIsım]=useState([
    "karabaş,3",
    "stella,8",
    "Boncuk,4",
    "Çapkın,5",
    "chester,4",
    "pamuk,3",
    "limon,4"
  ])
  const[test,setTest]=useState("")
  const begen=()=>{
    setYeni(yeni+1)
  }


  const begenme=()=>{
    setYeni(yeni+1)
  }
  const geri=()=>{
    setYeni(yeni+1)
  }

  useEffect(()=>{
    if(AsyncStorage.getItem('girisyapildi')){
  axios.get('https://dog.ceo/api/breeds/image/random').then((response)=>{
  setVeri(response.data);
  seta(Math.floor(Math.random()*7))
  })
    }else{
      router.push('/explore')
    }
  
},[yeni])

useFocusEffect(()=>{
  const kontrol=async()=>{
    const girisvarmi=await AsyncStorage.getItem('girisyapildi');
    if(!girisvarmi){
        router.push('/explore')
   }
}

kontrol();

})

  return (
    <View style={{paddingTop:60}}>
      <View>
        <Text style={{fontSize:45,fontWeight:900,color:'#e24779',textAlign:'center'}}><Fontisto name="fire" size={60} color="#e24779k" />dogder</Text>
      </View>
      <View style={{backgroundColor:'white',padding:10,margin:10}}>
      <Image width={400} height={400} source={{uri:veri.message}}></Image>
      <View style={{paddingTop:20}}>
        <Text style={{fontSize:30,fontWeight:30}}>{isim[a]} {test}</Text>
        <Text style={{height:100,fontSize:21}}>
        {bio[a]}
         </Text>
        </View>
      </View>
    <View></View>
      
      <View style={styles.aksiyon}>
        <View style={styles.btn}>
          <TouchableOpacity onPress={begen}><Entypo name="cross" size={70} color="red" /></TouchableOpacity></View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={begenme}><Fontisto name="arrow-return-left" size={70} color="lightblue" /></TouchableOpacity></View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={geri}><Ionicons name="heart" size={70} color="green" /></TouchableOpacity></View>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  aksiyon:{
    flexDirection:"row"
  },
  btn:{
    flex:1,
    alignItems:'center'
  }
})