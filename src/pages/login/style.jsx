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
    //design another
    contain_text_sign_up: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    text_help: {
        marginTop: 10
    },
    signUpText: {
        color: '#053B50',
        fontSize: 15
    },
    contain_logo_sign_up: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'
    },
    //design icon sign up
    iconSignUp: {
        width: 30,
        height: 30,
        marginLeft: 10
    }

})