import { Text } from "@rneui/themed";
import { StyleSheet, View } from "react-native";
import Banner from "../../components/banner/banner";
import Input from "../../components/input/input";
import ButtonD from "../../components/button/button";
import { SafeAreaView } from "react-native-safe-area-context";
import styleSheet from "./style";
const SignUpPage = ({ navigation }) => {
    const st_img_user = require('../../assets/icon/user.png')
    const st_img_lock = require('../../assets/icon/padlock.png')
    const st_img_banner = require('../../assets/image/banner.jpg')
    const st_img_open_lock = require('../../assets/icon/lock.png')
    const st_img_mail = require('../../assets/icon/mail.png')
    return (<SafeAreaView style={styleSheet.container}>
        <Banner stNameImageBanner={st_img_banner} ></Banner>
        <View style={styleSheet.contain_text}>
            <Text>CREATE NEW ACCOUNT</Text>
            <Text style={styleSheet.mainText}>ACCOUNT SIGN UP</Text>
        </View>
        <SafeAreaView style={styleSheet.containInput}>
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
                placeholder={'Type your password...'}
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
            <Input iconPath={st_img_open_lock}
                placeholder={'Confirm your password...'}
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
            <Input iconPath={st_img_mail}
                placeholder={'Your email...'}
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
            <View style={styleSheet.contain_button}>
                <ButtonD title={'Back'} onPress={() => navigation.navigate('login')} >

                </ButtonD>
                <ButtonD title={'Next'} onPress={() => navigation.navigate('detail')}>

                </ButtonD>
            </View>
        </SafeAreaView>
    </SafeAreaView>)
}

export default SignUpPage;