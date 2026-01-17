import React, {useRef} from 'react';
import Lottie  from 'lottie-react';

function Animation({source, style  = {}, onAnimationFinish = () => {}, autoPlay = true, loop = true, speed = 1.5}) {

    const lottieRef = useRef<Lottie>(null);

    return(
        <Lottie
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
