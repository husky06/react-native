const { StyleSheet } = require("react-native");

const Style = StyleSheet.create({
    card_noti: {
        margin: 5,
        width: 200,
        height: 100,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        padding: 8,
        borderBlockColor: 'black',
        borderWidth: 0.5
    },
    dot_color: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: 'red'
    },
    contain_toast: {
        height: '100%',
        width: '80%',
        marginLeft: 10
    },
    contain_icon: {
        width: 20,
        height: 20,
    },
    img_icon: {
        width: 10,
        height: 10
    },
    title_toast: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})
export default Style