import React from 'react';
import {View, StyleSheet, Platform, TouchableOpacity, TouchableHighlight} from "react-native";

import Text from '../components/Text'
import useStyle from '@boneframework/native-components/hooks/useStyle';
import useColors from '@boneframework/native-components/hooks/useColors';

function Button({title, onPress, color, textColor}) {
    const defaultStyles = useStyle();
    const colors = useColors();

    const styles = StyleSheet.create({
        roundbutton: {
            width: '100%',
            height: 70,
            borderRadius: 35,
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
            color: colors.black
        },
        text: {
            fontFamily: defaultStyles.text.fontFamily,
            color: colors.white,
            fontSize: 18,
            textTransform: 'uppercase',
            fontWeight: 'bold'
        }
    });

    return (
        <TouchableHighlight style={[styles.roundbutton, {
            backgroundColor: color ? colors[color]: styles.roundbutton.color,
        }]} onPress={onPress}>
            <Text style={[styles.text, {
                color: textColor ? colors[textColor] : styles.text.color}]
            }>{title}</Text>
        </TouchableHighlight>
    );
}



export default Button;
