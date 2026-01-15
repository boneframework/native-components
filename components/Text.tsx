import useStyle from '@boneframework/native-components/hooks/useStyle';
import React from 'react';
import {Text as NativeText} from "react-native";

function Text({children, style, ...otherProps}) {
    const defaultStyles = useStyle();

    return (
        <NativeText style={[defaultStyles.text, style]} {...otherProps} >
            {children}
        </NativeText>
    )
}

export default Text;
