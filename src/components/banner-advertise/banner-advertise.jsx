import { Text } from "@rneui/themed"
import { Image, View } from "react-native"
import ButtonD from "../button/button"
import Style from "./style"
const st_img_ads_pc = require('../../assets/icon/pc.png')

const BannerAds = (props) => {
    const { src_banner = st_img_ads_pc, title = "... event", time = "Util..." } = props
    return (<View style={Style.ads_banner}>
        <View style={Style.containInformation}>
            <Text style={Style.content_ads}>{title}</Text>
            <Text style={Style.date_off}>{time}</Text>
            <ButtonD title={"Go to shop"} />
        </View>
        <View style={Style.contain_img_ads}>
            <Image source={src_banner} style={Style.imageAds} />
        </View>
    </View>)
}
export default BannerAds