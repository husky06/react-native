const { StyleSheet } = require("react-native");

const Style = StyleSheet.create({
    // style for user information
    contaner_info_user: {
        width: '100%',
        height: 200,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    firstText: {
        fontSize: 40,
        height: '100%',
        width: '50%',
        textAlign: 'left',
        paddingTop: 20,
        fontWeight: '500',
    },
    container_avata: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avata: {
        width: 120,
        height: 120,
        borderRadius: 50
    },
})
export default Style