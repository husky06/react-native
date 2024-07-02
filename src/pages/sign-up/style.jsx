import { StyleSheet } from "react-native";

export default styleSheet = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'rgb(227, 252, 250)',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%'
    },
    contain_text: {
        width: '90%',
        marginTop: 20
    },
    mainText: {
        fontSize: 30,
        width: 140,
        fontWeight: '400'
    },
    //design for main login
    containInput: {
        display: 'flex',
        alignItems: 'flex-start',
        width: "90%",
        height: '50%',
        justifyContent: 'space-evenly'
    },
    //unique
    contain_button: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})