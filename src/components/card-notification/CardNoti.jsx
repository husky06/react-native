const { Text, Image } = require("react-native")
const { View } = require("react-native")
import Style from "./style"
const CardNoti = (props) => {
    const { title = "Your notification",
        detail = "something...", b_color = "white", d_color = "black" } = props
    const st_img_right = require('../../assets/icon/right-arrow.png')
    return (<View style={[Style.card_noti, { backgroundColor: b_color }]}>
        <View style={[Style.dot_color, { backgroundColor: d_color }]} />
        <View style={Style.contain_toast}>
            <Text style={Style.title_toast}>{title}</Text>
            <Text>{detail}</Text>
        </View>
        <View style={Style.contain_icon}>
            <Image source={st_img_right} style={Style.img_icon} />
        </View>
    </View>)
}
export default CardNoti