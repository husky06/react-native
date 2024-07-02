import { Image } from '@rneui/base';
import { Text } from '@rneui/themed/dist/Text';
import { TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import styleSheet from './style';
const Input = (props) => {
    const [text, setText] = useState(props.placeholder);
    useEffect(() => {
        setText(props.placeholder)
    }, [props.placeholder])
    return (<View style={[styleSheet.areaSearch,
    props.d_style.colorBorder,
    props.d_style.widthEdit,
    props.d_style.heightEdit,
    props.d_style.borderRadius,
    ]}>
        
        <TextInput
            style={[styleSheet.contentInInput,  props.d_style.fontColor]}
            onChangeText={setText}
            value={text}
        />
        <Image source={props.iconPath} style={styleSheet.icon} />
    </View>)
}

export default Input;