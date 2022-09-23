import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10
    },
    searchInput: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#e9ecef",
        flexDirection: "row",
        alignItems: "center",
    },
    placeHolder: {
        marginHorizontal:8
    },
    foodContainer: {
        flex: 1,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: "#fff",
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: "#dee2e6",
        height: 200,
        position: "relative",

    },
    image: {
        width: "100%",
        borderRadius: 10,
        height: "100%",

    },
    foodName: {
        paddingHorizontal: 10,
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff"
    },
    foodPrice: {
        fontSize: 12,
        color: "#fff",
        paddingHorizontal: 10,
        marginTop: 5,
        fontWeight:"bold"

    },
    blankItem: {
        backgroundColor:"transparent"
    }
   
})