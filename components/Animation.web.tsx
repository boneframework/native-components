import React, {useRef} from 'react';
import Lottie  from 'lottie-react';

function Animation({source, style  = {}, onAnimationFinish = () => {}, autoPlay = true, loop = true, speed = 1.5}) {

    const lottieRef = useRef(null);

    return(
        <Lottie
            animationData={source}
            autoPlay={autoPlay}
            loop={loop}
            style={style}
            speed={speed}
            onComplete={onAnimationFinish}
            lottieRef={lottieRef}
            onDOMLoaded={() => lottieRef.current?.setSpeed(speed)}
        />
    );
}

export default Animation;
