import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function FoodDetails(props) {
    const { width, height } = Dimensions.get('screen')
    const food = props.route.params.food;
    console.log(props)
    return (
        <View style={{ flex: 1, backgroundColor:"#fff" }}>
            <ScrollView style={{ flex: 1 }}>
            <Image source={food.image} style={{ width: width, height: height / 2 }} />
            <Text style={styles.FoodName}>{food.name}</Text>
            <Text style={styles.ingredients}>{food.ingredients}</Text>
            </ScrollView>
            <View style={{
                position: 'absolute', top: 40,
                backgroundColor: "#fff",
                borderRadius: 20,
                padding: 5,
                left: 20
            }}>
                <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                    <Ionicons name="arrow-back" size={24} />

                </TouchableOpacity>

            </View>
        </View>
    )
}