// const st_img_ads_pc = require('../../assets/icon/pc.png')
// import { View } from 'react-native';
// import Style from './style';
// import { Image, Text } from '@rneui/themed';
// const CardProduct = (props) => {
//     const { nameProduct = "Default name", price = "000.000vnd", uri = "" } = props
//     return (<View style={Style.card_product}>
//         <View style={Style.contain_img_prod}>
//             <Image style={Style.img_prod} source={{ uri: uri }} />
//         </View>
//         <View style={Style.detail_prod}>
//             <Text style={Style.name_prod}>
//                 {nameProduct}
//             </Text>
//             <Text style={Style.price_prod}>
//                 Giá: {price}
//             </Text>
//         </View>
//     </View>)
// }
// export default CardProduct;
import { View, TouchableOpacity } from 'react-native';
import Style from './style';
import { Image, Text } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const CardProduct = (props) => {
    const navigation = useNavigation();
    const { nameProduct = "Default name", price = "000.000vnd", uri = "" } = props

    const handlePress = () => {
        navigation.navigate('productdetail');
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={Style.card_product}>
                <View style={Style.contain_img_prod}>
                    <Image style={Style.img_prod} source={{ uri: uri }} />
                </View>
                <View style={Style.detail_prod}>
                    <Text style={Style.name_prod}>
                        {nameProduct}
                    </Text>
                    <Text style={Style.price_prod}>
                        Giá: {price}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CardProduct;
