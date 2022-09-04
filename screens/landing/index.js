import {styles} from './styles'
import { 
 SafeAreaView, View, Text, Image, ImageBackground ,ActivityIndicator} from 'react-native'
import React,{useState, useEffect} from 'react'
import Homepage from '../homepage'


export default function Landing() {

  const [loading, setLoading] = useState(true)
  useEffect (()=>{
    setTimeout(() => {
      setLoading(!loading)
    }, 3000)

  }, [] )
  
  return (
     <View style={styles.container}>{
      loading ?  <ActivityIndicator size="large" color="#0000ff"/> 
      :
    <Homepage/>
     }
     </View>
    
  )
}