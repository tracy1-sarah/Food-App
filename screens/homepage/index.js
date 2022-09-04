import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import homeImage from '../../assets/veges.jpeg'
import {styles} from './styles'

export default function Homepage({navigation}) {

  return (
    <View style={styles.container}>
      <ImageBackground source={homeImage} style={styles.image}
        resizeMode="cover"
        > 
        </ImageBackground>
        <View>
          
        <TouchableOpacity style={styles.button} 
        onPress={()=> navigation.navigate('Main')}>
            <Text style={styles.instruction}>View Menu</Text>
          </TouchableOpacity>
        </View>
        
    </View>
  )
}