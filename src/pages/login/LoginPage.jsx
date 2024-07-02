import { Image, Text, View } from "react-native"
import { StyleSheet } from "react-native"
import Banner from "../../components/banner/banner"
import Input from "../../components/input/input";
import ButtonD from "../../components/button/button";
import styleSheet from "./style";

const LoginPage = ({ navigation }) => {
    const st_img_banner = require('../../assets/image/banner.jpg')
    const st_img_user = require('../../assets/icon/user.png')
    const st_img_lock = require('../../assets/icon/padlock.png')
    const st_img_google = require('../../assets/icon/google.png')
    const st_img_facebook = require('../../assets/icon/facebook.png')


    return (<View style={styleSheet.container}>
        {/* banner */}
        <Banner stNameImageBanner={st_img_banner} ></Banner>
        <View style={styleSheet.contain_text}>
            <Text>WELCOME BACK</Text>
            <Text style={styleSheet.mainText}>ACCOUNT LOGIN</Text>
        </View>
        <View style={styleSheet.containInput}>
            <Input iconPath={st_img_user}
                placeholder={'Type your number...'}
                d_style={StyleSheet.create({
                    colorBorder: {
                        borderColor: '#176B87',
                    },
                    widthEdit: {
                        width: '100%',
                    },
                    heightEdit: {
                        height: 50,
                    },
                    fontColor: {
                        color: '#8C8A8A'
                    },
                    borderRadius: {
                        borderRadius: 5
                    }
                })} >
            </Input>
            <Input iconPath={st_img_lock}
                placeholder={'Type your number...'}
                d_style={StyleSheet.create({
                    colorBorder: {
                        borderColor: '#176B87',
                    },
                    widthEdit: {
                        width: '100%',
                    },
                    heightEdit: {
                        height: 50,
                    },
                    fontColor: {
                        color: '#8C8A8A'
                    },
                    borderRadius: {
                        borderRadius: 5
                    }
                })} >
            </Input>
            <Text style={styleSheet.text_help}>
                Forgot the password?
            </Text>
            <ButtonD title={'Login'}>

            </ButtonD>
            <View style={styleSheet.contain_text_sign_up}>
                <Text>Do you have any account?</Text>
                <Text style={styleSheet.signUpText}
                    onPress={() => {
                        navigation.navigate('sign-up')
                    }}>Sign up</Text>
            </View>
            <View style={styleSheet.contain_logo_sign_up}>
                <Image source={st_img_google} style={styleSheet.iconSignUp} />
                <Image source={st_img_facebook} style={styleSheet.iconSignUp} />
            </View>


        </View>


    </View>)
}

export default LoginPage