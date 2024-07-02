import { StyleSheet } from "react-native";

export default styleSheet = StyleSheet.create({
    shadowBox: {
        shadowColor: '#176B87',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        elevation: 5
    },
    containIconBar: {
        height: 50,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    tabBarStyle: {
        position: 'absolute',
        bottom: 10,
        left: 20,
        right: 20,
        borderRadius: 13,
        elevation: 0,
        backgroundColor: 'white',
        height: 60,
        padding: 10
    },
    bars: {
        width: 22, height: 22
    },
    titleBar: {
        fontSize: 12,
        color: '#053B50',
    },
    uploadBar: {
        width: 70,
        height: 70,
        padding: 10,
        bottom: 35,
        borderRadius: 50,
        backgroundColor: '#b1dded',
        borderColor: '#d1f2ff',
        borderWidth: 1
    }
})