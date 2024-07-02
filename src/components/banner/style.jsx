import { StyleSheet } from "react-native";

export default styleSheet = StyleSheet.create({

    banner: {
        padding: 5,
        width: '100%',
        height: '30%',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        resizeMode: 'center',
        alignSelf: 'stretch',
    },
    layout: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: "rgb(29, 30, 30)",
        opacity: 0.6,
        top: 4,
        borderRadius: 10
    },
    title: {
        fontSize: 14,
        color: '#37B4E4',
        textAlign: 'center',
    },
    content: {
        fontWeight: "500",
        fontSize: 20,
        color: '#37B4E4',
        textAlign: 'center'
    },

    imageBanner: {
        width: '100%', height: '100%', position: 'absolute', alignSelf: 'center',
        top: 4,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        overflow: 'hidden',
    }
})