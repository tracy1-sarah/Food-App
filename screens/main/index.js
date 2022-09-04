import { View, Text, Image, TextInput, FlatList, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import vegetableSalad from '../../assets/foood.jpeg'
import { styles } from './styles'
import { foods } from '../../data/foods'

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
    console.log(food);
    return (
        <Pressable >
            <View style={styles.foodContainer}>
                <Image source={food.image} style={styles.image}/>
                <Text>{food.name}</Text>
            </View>
        </Pressable>
    )
}