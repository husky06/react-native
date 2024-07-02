import { StyleSheet, Text, View } from "react-native";
import DetailPage from "../../pages/reels/DetailPage";
import HomePage from "../../pages/home/HomePage";
import { Image } from "@rneui/base";
import styleSheet from './style'
import UserPage from "../../pages/user/UserPage";
import HotPage from "../../pages/hot/Hotpage";
import ReelsPage from "../../pages/reels/DetailPage";
const { createBottomTabNavigator } = require("@react-navigation/bottom-tabs");
const st_img_home_icon = require('../../assets/icon/home.png')
const st_img_home_focus_icon = require('../../assets/icon/home_focus.png')

const st_img_user_icon = require('../../assets/icon/user.png')
const st_img_user_focus_icon = require('../../assets/icon/user_focus.png')

const st_img_reel_icon = require('../../assets/icon/reel.png')
const st_img_reel_focus_icon = require('../../assets/icon/reel_focus.png')

const st_img_hot_icon = require('../../assets/icon/hot.png')
const st_img_hot_focus_icon = require('../../assets/icon/hot_focus.png')

const st_img_upload_icon = require('../../assets/icon/upload.png')


const Tab = createBottomTabNavigator();
const MainTabs = () => {
    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    let title;
                    if (route.name === 'Home') {
                        title = 'Home'
                        iconName = focused
                            ? st_img_home_focus_icon
                            : st_img_home_icon
                        return (<View style={styleSheet.containIconBar}>
                            <Image source={iconName} style={styleSheet.bars} />
                            <Text style={styleSheet.titleBar}>{title}</Text>
                        </View>
                        );
                    }
                    if (route.name === 'User') {
                        title = 'User'
                        iconName = focused
                            ? st_img_user_icon
                            : st_img_user_focus_icon
                        return (<View style={styleSheet.containIconBar}>
                            <Image source={iconName} style={styleSheet.bars} />
                            <Text style={styleSheet.titleBar}>{title}</Text>
                        </View>
                        );
                    }
                    if (route.name === 'Upload') {
                        title = 'Upload'
                        iconName = focused
                            ? st_img_upload_icon
                            : st_img_upload_icon
                        return (<View style={[styleSheet.containIconBar, styleSheet.uploadBar]}>
                            <Image source={iconName} style={styleSheet.bars} />
                            <Text style={styleSheet.titleBar}>{title}</Text>
                        </View>
                        );
                    }
                    if (route.name === 'Reels') {
                        title = 'Reels'
                        iconName = focused
                            ? st_img_reel_focus_icon
                            : st_img_reel_icon
                        return (<View style={styleSheet.containIconBar}>
                            <Image source={iconName} style={styleSheet.bars} />
                            <Text style={styleSheet.titleBar}>{title}</Text>
                        </View>
                        );
                    }
                    if (route.name === 'Hot') {
                        title = 'Hot'
                        iconName = focused
                            ? st_img_hot_focus_icon
                            : st_img_hot_icon
                        return (<View style={styleSheet.containIconBar}>
                            <Image source={iconName} style={styleSheet.bars} />
                            <Text style={styleSheet.titleBar}>{title}</Text>
                        </View>
                        );
                    }
                    return (<View style={styleSheet.containIconBar}>
                        <Text>{title}</Text>
                    </View>)
                },
                tabBarStyle: {
                    ...styleSheet.tabBarStyle,
                    ...styleSheet.shadowBox
                },
            })}
        >
            <Tab.Screen name="Home" component={HomePage} options={{
                headerShown: false,
            }} />
            <Tab.Screen name="Hot" component={HotPage} options={{
                headerShown: false,
            }} />
            <Tab.Screen name="Upload" component={DetailPage} options={{
                headerShown: false,
            }} />
            <Tab.Screen name="Reels" component={ReelsPage} options={{
                headerShown: false,
            }} />

            <Tab.Screen name="User" component={UserPage} options={{
                headerShown: false,
            }} />

        </Tab.Navigator>
    );
}
export default MainTabs;