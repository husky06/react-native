const { StyleSheet } = require("react-native");

const Style = StyleSheet.create({
    //design for card product
    card_product: {
        marginTop: 10,
        width: 180,
        height: 200,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    contain_img_prod: {
        height: '80%',
        width: '90%',
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img_prod: {
        width: 120,
        height: 120,
        borderRadius: 10
    },
    name_prod: {
        fontWeight: 'bold'
    },
    price_prod: {
        fontSize: 12
    }
})
export default Style