import React from 'react';
import {
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Pressable,
} from 'react-native';
import styles from './style';
const ButtonD = (props) => {
    const { onPress, title = 'Start Now !' } = props;
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

export default ButtonD;