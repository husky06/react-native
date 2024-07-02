const { StyleSheet } = require("react-native");

const Style = StyleSheet.create({
    container: {
        width: '100%',
        padding: 5,
        backgroundColor: 'white'
    },
    containIcon: {
        padding: 10,
        backgroundColor: '#5D8078',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    searchIcon: {
        width: 20,
        height: 20
    },
    containHeader: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleHeader: {
        fontSize: 20,
        width: '50%',
        fontWeight: 'bold',
        color: '#053B50'
    },

    //design option
    contain_option: {
        marginTop: 10,
        width: '100%',
        height: 70,
        display: 'flex',
        flexDirection: 'row',
       
    },
    containIconOption: {
        marginRight: 5,
        padding: 5,
        width: 55,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#64CCC5'
    },
    containIconOptionActive: {
        backgroundColor: '#176B87',
    },
    containIconOptionActive2: {
        backgroundColor: '#64CCC5',
    },
    logoBrand: {
        width: 28,
        height: 28
    },
    //design for main home
    title_choose: {
        width: '100%',
        fontSize: 18,
        fontWeight: '500'
    },
    contain_card_prod: {
        // padding: '2%',
        width: '100%',
        minHeight: 270,
        display: 'flex',
        flexWrap: 'wrap',
        paddingBottom: 90
    },
    
})
export default Style