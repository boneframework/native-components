import React, {useEffect, useRef} from 'react';
import LottieView from "lottie-react-native";

function Animation({source, style  = {}, onAnimationFinish = () => {}, autoPlay = true, loop = true, speed = 1.5}) {

    const lottieRef = useRef(null);

    return(
        <LottieView
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
