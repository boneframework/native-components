import {StyleSheet, View} from "react-native";
import {Image as ExpoImage} from "expo-image";

import useAuth from "../hooks/useAuth";
import settings from '../../../../config/api';

function Image({style, uri, onPress, handleError = error => console.error, source, ...rest}) {
    const {user} = useAuth();

    const tryAgain = async error => {
        handleError();
        setTimeout(() => {}, 1000);
    };
    let imageSource;
    let protectedUri = false;

    if (typeof source === 'object' && 'uri' in source !== null && (typeof source.uri === 'string' || source.uri instanceof String)) {
        imageSource = source;

        if (source.uri.startsWith(settings.baseURL)) {
            imageSource = { headers: {Authorization: 'Bearer ' + user.authToken.accessToken }, uri: source.uri};
            protectedUri = true;
        }
    }
    else if (uri) {
        imageSource = {uri: uri}

        if (uri.startsWith(settings.baseURL)) {
            imageSource = { headers: {Authorization: 'Bearer ' + user.authToken.accessToken }, uri: uri};
            protectedUri = true;
        }
    } else if (source) {
        imageSource = source;
    }

    if ((null !== user.authToken.accessToken && protectedUri == true) || protectedUri == false) {
        return (
            <ExpoImage
                source={imageSource}
                style={style}
                onError={tryAgain}
                {...rest}
            ></ExpoImage>
        );
    }
}

export default Image;


