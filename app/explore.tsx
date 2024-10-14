import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import { router, Router,useFocusEffect } from 'expo-router';

const explore = () => {

  const[demo,setDemo]=useState({"isim":"Çağrı"})
  const[cikti,setCikti]=useState("")
  const[eposta,setEposta]=useState("")
  const[sifre,setSifre]=useState("")


  const veriSil= async ()=>{
    await AsyncStorage.removeItem('veri')
    setCikti('')
  }
  const veriGetir=async()=>{
    await AsyncStorage.setItem('veri',JSON.stringify(demo))
  }
  const veriUyarla=async()=>{
    const uyar=await AsyncStorage.getItem('veri');
    const sonuc=JSON.parse(uyar)
    setCikti(sonuc.isim)
  }
  const girisyap=async()=>{
    if(eposta=='info@aribilgi.com' && sifre=='123456'){
      await AsyncStorage.setItem('girisyapildi','Evet')
      router.push('/(tabs)/')
    }
  }
  useFocusEffect(()=>{

    const kontrol=async()=>{
        const girisvarmi=await AsyncStorage.getItem('girisyapildi');
        if(!girisvarmi){
            router.push('/(tabs)/')
       }
    }
    kontrol();
    

},[])

  
  return (
    <View style={{paddingTop:50,flex:1,justifyContent:'center'}}>
     
     <View>
      <View style={styles.logincard}>
     <Text style={{fontSize:45,fontWeight:900,color:'#e24779',textAlign:'center',marginTop:30,marginBottom:50}}><Fontisto name="fire" size={60} color="#e24779k" />dogder</Text>
     <TextInput style={styles.input} placeholder='E POSTA' value={eposta} onChangeText={setEposta}/>
     <TextInput style={styles.input} placeholder='Şifre' value={sifre} onChangeText={setSifre}
     secureTextEntry />

     <View style={styles.logincardBtn}>
        <TouchableOpacity onPress={girisyap} style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Giriş</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerBtn}>
          <Text style={styles.registerBtnText}>Kayıt Ol</Text>
        </TouchableOpacity>
     
        </View>
      </View>
    </View>

    </View>
  )
}

export default explore

const styles = StyleSheet.create({
  input:{
    fontSize:18,
    padding:18,
    borderBottomWidth:2,
    borderBottomColor:'grey',
    marginBottom:30,
  },
  logincard:{
  padding:20,
  borderWidth:1,
  borderRadius:9,
  borderColor:'#ccccc',
  margin:20,
  backgroundColor:'white',
  },
  logincardBtn:{
    flexDirection:'column',
    paddingTop:30,
  },
  loginBtn:{
    backgroundColor:'#e24779',
    padding:10,
    borderRadius:9,
  },
  loginBtnText:{
    fontSize:24,
    color:'white',
    fontSize:24,
    textAlign:'center',
  },
  registerBtn:{
    backgroundColor:'ghostwhite',
    padding:10,
    borderRadius:9,
    marginTop:30,
  },
  registerBtnText:{
    fontSize:24,
    color:'grey',
    textAlign:'center'    
  }
})
