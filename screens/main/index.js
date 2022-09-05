import { View, Text, Image, TextInput, FlatList, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import vegetableSalad from '../../assets/foood.jpeg'
import { styles } from './styles'
import { foods } from '../../data/foods'
import {useNavigation} from '@react-navigation/native'

export default function Main() {
    const [selected, setSelected] = useState(null)
    return (
        <View style={styles.container}>
            <View style={styles.searchInput}>
                <TextInput
                    style={styles.placeHolder}
                    placeholder="Search Food..."
                ></TextInput>
            </View>
            <View style={styles.flatView}>
                <FlatList
                    data={foods}
                    renderItem={(item) => <FoodCard food={item.item} />}
                    keyExtractor={(item) => item.id}
                />

            </View>
        </View>
    )
}


function FoodCard({food}) {
    const navigate = useNavigation()
    return (
        <Pressable onPress={()=>{navigate.navigate("Menu details",{food})}} >
            <View style={styles.foodContainer}>
                <Image source={food.image} style={styles.image}/>
                <Text>{food.name}</Text>
            </View>
        </Pressable>
    )
}