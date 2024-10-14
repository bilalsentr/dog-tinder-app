import { Tabs, useFocusEffect} from 'expo-router';
import React, { useState } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const[isgiris,setIsgiris]=useState("Giriş")
  const[iscikis,setIscikis]=useState("Giriş")

  useFocusEffect(()=>{
    const kontrol=async()=>{
    const girisvarmi=await AsyncStorage.getItem('girisyapildi');
    if(girisvarmi){
        setIsgiris(null)
        setIscikis('/cikis')

   }else{
    setIsgiris('/explore')
    setIscikis(null)
   }
   }
kontrol();

})

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'flame' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="kisiler"
        options={{
          title: 'Mesaj',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'chatbubble' : 'chatbubble-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          href:isgiris,
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cikis"
        options={{
          href:iscikis,
          title: 'çıkıs',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
