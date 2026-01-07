import React, {useRef} from 'react';
import { DotLottie } from '@lottiefiles/dotlottie-react-native';


function Animation({source, style  = {}, onAnimationFinish = () => {}, autoPlay = true, loop = true, speed = 1.5}) {
    
    const lottieRef = useRef<DotLottie>(null);


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
