import {StyleSheet,Dimensions} from 'react-native'

const {width,height} = Dimensions.get('screen')

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    searchInput:{
        borderBottomWidth: 1,
        borderBottomColor:"purple",
        borderRadius: 20,
    },
    placeHolder:{
        padding: 10,

    },
    foodContainer:{
        flex: 1,
    },
    image:{
        width: width,
        height: 200,
        borderRadius: 5
    },
    itemCard:{

    }
})