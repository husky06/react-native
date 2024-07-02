import React from 'react';
import HomePage from './src/pages/home/HomePage';
import IntroPage from './src/pages/intro/IntroPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from '@rneui/themed';
import DetailPage from './src/pages/reels/DetailPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPage from './src/pages/login/LoginPage';
import SignUpPage from './src/pages/sign-up/SignUpPage';
import MainTabs from './src/components/bottom-tab/MainTab';
import { StatusBar } from 'react-native';
import ProductDetail from './src/pages/product/ProductDetail';
import DetailProduct from './src/pages/detail-product/detail-product';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
      <Stack.Navigator>
        <Stack.Screen name="intro" component={IntroPage} options={{
          headerShown: false
        }} />
        <Stack.Screen name="login" component={LoginPage} options={{
          headerShown: false
        }} />
        <Stack.Screen name="sign-up" component={SignUpPage} options={{
          headerShown: false
        }} />
        <Stack.Screen name="detail-product" component={DetailProduct} options={{
          headerShown: false
        }} />
        <Stack.Screen name="detail" component={MainTabs} options={{
          headerShown: false
        }} />
        <Stack.Screen name="productdetail" component={ProductDetail} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

