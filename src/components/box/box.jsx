import { Image } from "@rneui/themed";
import { Text, View } from "react-native";
import styleSheet from "./style";
const BoxIcon = (props) => {
    return (<View style={[styleSheet.container,
    props.fill.fillColor,
    props.fill.stroke, props.anyStyle]}>
        <Image style={[styleSheet.iconBox, props.styleIcon]}
            source={props.pathIcon} />
        <Text style={[styleSheet.title, props.font]}>{props.titleBox}</Text>
    </View>)
}

export default BoxIcon;