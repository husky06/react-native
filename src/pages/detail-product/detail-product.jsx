import { Text } from "@rneui/base";
import style from "../intro/style";
import { SafeAreaView } from "react-native-safe-area-context";
const { StyleSheet, ScrollView, View, TouchableWithoutFeedback, Image, FlatList } = require("react-native");

const st_img_arrow = require('../../assets/icon/left-arrow.png')

const DetailProduct = (props) => {
    const { navigation } = props
    const { urlImage, allImage, nameProduct, price, reiveiw } = props.route.params

    return (<SafeAreaView style={styleSheet.container}>
        <TouchableWithoutFeedback onPress={() => {
            navigation.pop()
        }} >
            <View style={styleSheet.popScreen}>
                <Image style={styleSheet.iconBack} source={st_img_arrow} />
                <Text style={styleSheet.textBack} >Quay lại</Text>
            </View>
        </TouchableWithoutFeedback>
        <View style={styleSheet.viewProduct}>
            <View style={styleSheet.containImage}>
                <Image source={{ uri: urlImage }} style={styleSheet.imageProduct} />

            </View>
            <View style={styleSheet.someinfoProduct}>
                <Text>Tên sản phẩm: {nameProduct}</Text>
                <Text>Giá phổ biến: {price}</Text>
                <Text>Giới thiệu sơ qua: {reiveiw}</Text>
            </View>
        </View>
        <View style={styleSheet.containAllImageRelative}>
            <Text>
                Một số hình ảnh sản phẩm
            </Text>
            <ScrollView horizontal >
                <FlatList style={styleSheet.allImage}  numColumns={3} data={allImage} renderItem={({ item }) =>
                    <View style={styleSheet.containImage}>
                        <Image source={{ uri: item }} style={styleSheet.imageProduct} />
                    </View>
                }>
                </FlatList>
            </ScrollView>
        </View>
        <View style={styleSheet.containAllReviewOfShop}>
            <Text>
                Khách hàng đánh giá sản phẩm từ các shop
            </Text>
        </View>

    </SafeAreaView >)
}
const styleSheet = StyleSheet.create({
    popScreen: {
        display: 'flex',
        flexDirection: 'row',
        minWidth: 100,
        padding: 10,
    },
    textBack: {
        fontSize: 16,
        fontWeight: "800",
    },
    iconBack: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    container: {
        width: '100%',
        backgroundColor: 'white',
        minHeight: 500
    },
    viewProduct: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    containImage: {
        width: 150,
        height: 150,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
    },
    imageProduct: {
        padding: 10,
        width: 140,
        height: 140,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    someinfoProduct: {
        justifyContent: 'space-evenly',
        width: 200,
        minHeight: 120,
    },
    containAllImageRelative: {
        width: '100%',
        minHeight: 200,
        padding: 10
    },
    allImage: {
        width: '100%',
        minHeight: 100,
        display: 'flex',
        overflow: 'hidden',
        flexDirection: 'row',

    },
    containAllReviewOfShop: {
        width: '100%',
        minHeight: 300,
        padding: 10,
    }

})
export default DetailProduct;