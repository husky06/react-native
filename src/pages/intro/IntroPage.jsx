import { ImageBackground } from "react-native";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Banner from "../../components/banner/banner";
import Input from "../../components/input/input";
import BoxIcon from "../../components/box/box";
import ButtonD from "../../components/button/button";
import Footer from "../../components/footer/footer";
import styleSheet from "./style";

const IntroPage = ({ navigation}) => {
    const st_img_banner = require('../../assets/image/banner.jpg')
    const st_img_search_icon = require('../../assets/icon/search.png')
    const st_img_monitor = require('../../assets/icon/monitor.png')
    const st_img_information = require('../../assets/icon/information.png')
    const st_img_information_blue = require('../../assets/icon/information_blue.png')

    const st_img_setting = require('../../assets/icon/setting.png')
    const st_img_price = require('../../assets/icon/price-tag.png')
    const st_img_rating = require('../../assets/icon/star.png')



    return (<View style={styleSheet.container}>
        {/* banner */}
        <Banner title={'HELLO CLIENT'}
            content={'SEARCH YOUR PRODUCT YOU WANT TO BUY !'}
            stNameImageBanner={st_img_banner} >
            <Input iconPath={st_img_search_icon}
                placeholder={'Entering name...'}
                d_style={StyleSheet.create({
                    colorBorder: {
                        borderColor: '#27C9FF',
                    },
                    widthEdit: {
                        width: '60%',
                    },
                    heightEdit: {
                        height: 40,
                    },
                })} />
        </Banner>
        {/* content in intro page, not need to create component */}
        <View style={styleSheet.containContent}>
            <View style={styleSheet.viewCompare}>
                <View style={styleSheet.containField}>
                    <Text>SHOP A</Text>
                    <Text>SHOP B</Text>
                </View>
                <View style={styleSheet.containDescription}>
                    <Text style={styleSheet.textDescription}>Information of this product in SHOP A and SHOP B</Text>
                    <Image source={st_img_information} style={styleSheet.imageIcon} />
                </View>
            </View>
            <View style={styleSheet.viewProduct}>
                <BoxIcon
                    pathIcon={st_img_monitor}
                    titleBox={'Product'}
                    fill={StyleSheet.create({
                        fillColor: {
                            backgroundColor: '#053B50'
                        }
                    })}
                />
            </View>

        </View>
        {/* descripts app fuction */}
        <Text style={styleSheet.titleAppFunction}>
            What's compare?
        </Text>
        <View style={styleSheet.containAppFuction}>
            <BoxIcon
                pathIcon={st_img_setting}
                titleBox={'Setting'}
                fill={StyleSheet.create({
                    fillColor: {
                        backgroundColor: 'white'
                    },
                    stroke: {
                        borderColor: '#64CCC5'
                    }
                })}
            />
            <BoxIcon
                pathIcon={st_img_price}
                titleBox={'Price'}
                fill={StyleSheet.create({
                    fillColor: {
                        backgroundColor: 'white'
                    },
                    stroke: {
                        borderColor: '#64CCC5'
                    }
                })}
            />
            <BoxIcon
                pathIcon={st_img_rating}
                titleBox={'Rating'}
                fill={StyleSheet.create({
                    fillColor: {
                        backgroundColor: 'white'
                    },
                    stroke: {
                        borderColor: '#64CCC5'
                    }
                })}
            />
            <BoxIcon
                pathIcon={st_img_information_blue}
                titleBox={'Info'}
                fill={StyleSheet.create({
                    fillColor: {
                        backgroundColor: 'white'
                    },
                    stroke: {
                        borderColor: '#64CCC5'
                    }
                })}
            />
        </View>
        {/* end of this page */}
        <View style={styleSheet.containEndIntroPage}>
            <ButtonD onPress={() => navigation.navigate('login')} />
        </View>
        {/* footer */}
        <View style={styleSheet.containFooter}>
            <Footer />
        </View>
    </View>)
}

export default IntroPage;