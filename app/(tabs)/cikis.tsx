import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState,useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, useFocusEffect } from 'expo-router';


const cikis = () => {
    const[giriskontrol,setGiriskontrol]=useState("x")
    const cikisyap=async()=>{
        await AsyncStorage.removeItem('girisyapildi')
        setGiriskontrol("")
        router.push('/explore')
    }
        
    useFocusEffect(()=>{

        const kontrol=async()=>{
            const girisvarmi=await AsyncStorage.getItem('girisyapildi');
            if(!girisvarmi){
                router.push('/explore')
           }
        }
        
        kontrol();

    },[])


     return (
    <View style={{paddingTop:50}}>
        <Text>{giriskontrol}</Text>
        <TouchableOpacity onPress={cikisyap}style={{width:'100%',backgroundColor:'crimson',padding:10,marginTop:50}}>
      <Text style={{color:'white',textAlign:'center',fontSize:21}}>çıkış</Text>
      </TouchableOpacity>
    </View>
  )
}

export default cikis

const styles = StyleSheet.create({})