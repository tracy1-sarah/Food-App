import { View, Text, Image, TextInput, FlatList, Pressable, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import vegetableSalad from '../../assets/foood.jpeg'
import { styles } from './styles'
import { foods } from '../../data/foods'
import { useNavigation } from '@react-navigation/native'
import {Ionicons} from '@expo/vector-icons'

export default function Main() {
    const [selected, setSelected] = useState(null)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.searchInput}>
                    <Ionicons name="search" size={18} color="#ccc"/>
                    <TextInput
                        style={styles.placeHolder}
                        placeholder="Search Food..."
                    ></TextInput>
                </View>
                <View style={styles.flatView}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={foods}
                        renderItem={(item) => <FoodCard food={item.item} />}
                        keyExtractor={(item) => item.id}
                    />

                </View>
            </View>
        </SafeAreaView>
    )
}


function FoodCard({ food }) {
    const navigate = useNavigation()
    return (
        <Pressable style={styles.foodContainer} onPress={() => { navigate.navigate("Menu details", { food }) }}>
            <View style={{ position: "absolute", bottom: 0, backgroundColor:"black", zIndex:1, width: "100%", height: "30%", opacity:0.7, borderBottomEndRadius:10,borderBottomLeftRadius:10,
        paddingVertical:10
        }}>
                <Text style={styles.foodName}>{food.name}</Text>
                <Text style={styles.foodPrice}>{food.price}</Text>

            </View>
            <View>

                <Image source={food.image} style={styles.image} />

            </View>
        </Pressable>
    )
}