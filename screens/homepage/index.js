import { View, Text, Image, TextInput, FlatList, Pressable, Dimensions, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { foods } from '../../data/foods'
import { useNavigation } from '@react-navigation/native'
import {Ionicons} from '@expo/vector-icons'

const numColumns = 2
const WIDTH = Dimensions.get('window').width

export default function Homepage() {
    const [selected, setSelected] = useState(null)
    formatData = (foods, numColumns) => {
        const totalRows = Math.floor(foods.length / numColumns)
        let TotalLastRow = foods.length - (totalRows * numColumns)
        while (TotalLastRow !== 0 && TotalLastRow !== numColumns) {
            foods.push({ key: 'blank', empty: true })
            TotalLastRow++
        }
        return foods
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* Search Area */}
          <View style={styles.searchInput}>
            <Ionicons name="search" size={18} color="#ccc" />
            <TextInput
              style={styles.placeHolder}
              placeholder="Search Food..."
            ></TextInput>
          </View>
          {/* Food Card View */}
          <View
            style={{ flex: 1, marginBottom: 10, height: WIDTH / numColumns }}
          >
            <FlatList
              showsVerticalScrollIndicator={false}
              data={formatData(foods, numColumns)}
              renderItem={(item) => <FoodCard food={item.item} />}
              keyExtractor={(item) => item.id}
              numColumns={numColumns}
            />
          </View>
        </View>
      </SafeAreaView>
    );
}

// Food Card Function
function FoodCard({ food }) {
    const navigate = useNavigation()
    
    if (food.empty) {
        return <View style={[styles.foodContainer, styles.blankItem]}></View>
    }
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