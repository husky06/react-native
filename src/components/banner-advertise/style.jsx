const { StyleSheet } = require("react-native");

const Style = StyleSheet.create({
    //design banner shop
    ads_banner: {
        width: '100%',
        height: 150,
        backgroundColor: '#EDEDED',
        borderRadius: 15,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center"
    },
    containInformation: {
        width: '50%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10
    },
    content_ads: {
        fontSize: 22,
        fontWeight: "500",
    },
    date_off: {
        fontSize: 12,
        marginBottom: 15
    },
    contain_img_ads: {
        width: '50%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c4ece9',
        borderRadius: 20
    },
    imageAds: {
        height: '70%',
        width: '70%'
    },
})
export default Style