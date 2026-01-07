import React, {useRef} from 'react';
import LottieView from "lottie-react-native";

import { Platform } from 'react-native';
import { DotLottie as DotLottieNative } from '@lottiefiles/dotlottie-react-native';
import { DotLottie as DotLottieWeb } from '@lottiefiles/dotlottie-react';

const DotLottie = Platform.select({
  ios: DotLottieNative,
  android: DotLottieNative,
  default: DotLottieWeb as any,
});

function Animation({source, style  = {}, onAnimationFinish = () => {}, autoPlay = true, loop = true, speed = 1.5}) {
    
    const lottieRef = useRef(null);

    return(
        <DotLottie
            source={source}
            autoPlay={autoPlay}
            loop={loop}
            style={style}
            speed={speed}
            onAnimationFinish={onAnimationFinish}
            ref={lottieRef}
        />
    );
}

export default Animation;
