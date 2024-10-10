import React from 'react';
import { ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

function Background({children, imagePath =  null, gradientColors  = null, ...rest}) {
    if (imagePath === null && gradientColors === null) {
        return;
    }

    if (imagePath !== null) {
        return <ImageBackground source={require(imagePath)} {...rest}>
            { children }
        </ImageBackground>
    }

    return <LinearGradient colors={gradientColors}>
        { children }
    </LinearGradient>
}

export default Background;
