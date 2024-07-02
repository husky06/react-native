import { StyleSheet } from "react-native";

export default styleSheet = StyleSheet.create({

    container: {
        display: 'flex',
        backgroundColor: 'rgb(227, 252, 250)',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%'
    },
    //style for content of this page
    containContent: {
        width: '100%',
        height: '25%',
        backgroundColor: '#c4ece9',
        display: 'flex',
        flexDirection: "row"
    },
    viewCompare: {
        width: '70%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    viewProduct: {
        width: '30%',
        height: '100%',
        display: "flex",
        alignItems: "center",
        justifyContent: 'center'
    },
    containField: {
        width: '90%',
        height: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderBottomWidth: 2,
        paddingBottom: 3
    },
    containDescription: {
        display: "flex",
        flexDirection: 'row',
        width: '90%',
        height: '50%'
    },
    textDescription: {
        textAlign: 'center',
        padding: 2
    },
    imageIcon: {
        width: 10,
        height: 10
    },
    //style for app fucntion
    titleAppFunction: {
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'white',
        fontSize: 16,
        paddingTop: 5,
        fontWeight: 'bold'
    },
    containAppFuction: {
        backgroundColor: 'white',
        width: '100%',
        height: '20%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: 'center'
    },
    //style for end of this page
    containEndIntroPage: {
        width: '100%',
        height: '9%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    //footer
    containFooter: {
        width: '100%',
        height: '12%',
        display: 'flex',
        alignItems: 'center'
    }

})