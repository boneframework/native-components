import React from 'react';
import { ImageBackground } from "expo-image";
import { LinearGradient } from 'expo-linear-gradient';

function Background({children, imageSource =  null, gradientColors  = null, blurRadius= 10, ...rest}) {
    if (imageSource === null && gradientColors === null) {
        return;
    }

    if (imageSource !== null) {
        return <ImageBackground source={imageSource} blurRadius={blurRadius} {...rest}>
            { children }
        </ImageBackground>
    }

    return <LinearGradient colors={gradientColors} {...rest}>
        { children }
    </LinearGradient>
}

export default Background;
