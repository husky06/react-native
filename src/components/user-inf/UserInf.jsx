import { Image, Text } from "@rneui/themed"
import { View } from "react-native"
import Style from "./style"

const UserInf = ()=>{
    const st_img_ads_pc = require('../../assets/icon/pc.png')
    return( <View style={Style.contaner_info_user}>
        <Text style={Style.firstText}>
            Hello, Duong Nguyen
        </Text>
        <View style={Style.container_avata}>
            <Image source={st_img_ads_pc} style={Style.avata} />
            <Text>ID: af@ffsd1234</Text>
        </View>
    </View>)
}
export default UserInf