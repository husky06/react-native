import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import styleSheet from './style';

const Footer = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containInfor}>
                <Text style={styles.textInfor}>@Copyright By: NTD</Text>
                <Text style={styles.textInfor}>Software project management: Thinh Cuong Duong</Text>
            </View>
            <Image style={styles.imageQr} source={require('../../assets/icon/qr-code.png')} />
        </View>
    )
}

export default Footer;