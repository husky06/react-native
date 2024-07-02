import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    containInfor: {
        width: '50%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageQr: {
        width: 40,
        height: 40
    },
    textInfor: {
        textAlign: 'center',
        fontSize: 13,
        color: '#A9A9A9'
    }
});