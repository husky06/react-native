import { ImageBackground } from "react-native";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import styleSheet from "./style";
const Banner = (props) => {
    return (<>
        {/* banner */}
        <View style={styleSheet.banner}>
            <ImageBackground source={props.stNameImageBanner} style={styleSheet.imageBanner}></ImageBackground>
            <View style={styleSheet.layout} />
            <Text style={styleSheet.title}>
                {props.title}
            </Text>
            <Text style={styleSheet.content}>
                {props.content}
            </Text>

            {props.children}
            {/* <Image source={require('../../assets/image/banner.jpg')} /> */}

        </View >
    </>)
}

export default Banner;