import { Card, Image, Text } from "@rneui/themed"
import { ScrollView, StyleSheet, View } from "react-native"
import UserInf from "../../components/user-inf/UserInf"
import CardNoti from "../../components/card-notification/CardNoti"
import BoxIcon from "../../components/box/box"
import { Children } from "react"
import Style from "../home/style"
const st_img_notification = require('../../assets/icon/notification.png')
const st_img_bloggin = require('../../assets/icon/blogging.png')
const st_img_saved = require('../../assets/icon/save-instagram.png')
const st_img_suport = require('../../assets/icon/support.png')



const UserPage = () => {
    return (<View style={styleSheet.container}>
        {/* infor user */}
        <UserInf />

        <Text style={styleSheet.text_noti}>
            Notifications
        </Text>
        {/* option for user */}
        <View style={styleSheet.contain_card_noti}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <CardNoti title={"Iphone phien ban moi sap ra mat"} detail={"tai shopee"} b_color={'#e1e3f7'} d_color={'black'} />
                <CardNoti title={"Samsung zflip sieu re"} detail={"tai shopee"} b_color={'#e1f7e8'} d_color={'#34db13'} />
                <CardNoti title={"Gia Iphone 2 tang chong mat"} detail={"tai ladaza"} b_color={'#e1f7e8'} d_color={'#34db13'} />
            </ScrollView>
        </View>

        {/* over view */}
        <Text style={styleSheet.text_noti}>
            Overview
        </Text>
        
        
        <View style={styleSheet.overviewContainer}>
        
            <BoxIcon
                pathIcon={st_img_bloggin}
                titleBox={'My Blog'}
                fill={StyleSheet.create({
                    fillColor: {
                        backgroundColor: '#1572A1',
                        borderRadius: 20, 
                    },
                    stroke: {
                        borderColor: '#64CCC5'
                    }
                })}
                anyStyle={StyleSheet.create({
                    width: 150,
                    height: 110,
                    marginBottom: 10
                })}
                styleIcon={StyleSheet.create({
                    width: 50,
                    height: 50
                })}
                font={StyleSheet.create({
                    fontSize: 17,
                    color: '#DAFFFB'
                })}
            />
            <BoxIcon
                pathIcon={st_img_saved}
                titleBox={'Saved'}
                fill={StyleSheet.create({
                    fillColor: {
                        backgroundColor: '#8EACCD',
                        borderRadius: 20,

                    },
                    stroke: {
                        borderColor: '#64CCC5'
                    }
                })}
                anyStyle={StyleSheet.create({
                    width: 150,
                    height: 110,
                    marginBottom: 10
                })}
                styleIcon={StyleSheet.create({
                    width: 50,
                    height: 50
                })}
                font={StyleSheet.create({
                    fontSize: 17,
                    color: '#DAFFFB'
                })}

            />
            <BoxIcon
                pathIcon={st_img_notification}
                titleBox={'All Notifications'}
                fill={StyleSheet.create({
                    fillColor: {
                        backgroundColor: '#9AD0EC',
                        borderRadius: 20,

                    },
                    stroke: {
                        borderColor: '#64CCC5'
                    }
                })}
                anyStyle={StyleSheet.create({
                    width: 150,
                    height: 110,
                    marginBottom: 10
                })}
                styleIcon={StyleSheet.create({
                    width: 50,
                    height: 50
                })}
                font={StyleSheet.create({
                    fontSize: 17,
                    color: '#04364A'
                })}
            />
            <BoxIcon
                pathIcon={st_img_suport}
                titleBox={'Support'}
                fill={StyleSheet.create({
                    fillColor: {
                        backgroundColor: '#DAFFFB',
                        borderRadius: 20,

                    },
                    stroke: {
                        borderColor: '#64CCC5'
                    }
                })}
                anyStyle={StyleSheet.create({
                    width: 150,
                    height: 110,
                    marginBottom: 10
                })}
                styleIcon={StyleSheet.create({
                    width: 50,
                    height: 50
                })}
                font={StyleSheet.create({
                    fontSize: 17,
                    color: '#04364A'
                })}
            />
        
        </View>
        

    </View>)
}
const styleSheet = StyleSheet.create({
    container: {
        padding: 4,
        backgroundColor: 'white',
        height: '100%'
        
    },

    //
    text_noti: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
        lineHeight: 20
    },
    contain_card_noti: {
        display: "flex",
        flexDirection: 'row',
        height: 120,
        marginHorizontal: 10,
    },
    overviewContainer: {
        alignContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: '100%',

    }
})
export default UserPage