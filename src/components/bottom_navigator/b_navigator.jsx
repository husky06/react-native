import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import IntroPage from '../../pages/intro/IntroPage';
import DetailPage from '../../pages/reels/DetailPage';
import HomePage from '../../pages/home/HomePage';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="home" component={HomePage} />
            <Tab.Screen name="detail" component={DetailPage} />
        </Tab.Navigator>
    </NavigationContainer>
}
export default BottomNavigator;