import React from 'react';
import { StyleSheet, View } from "react-native";

import useStyle from "@boneframework/native-components/hooks/useStyle";
import Animation from "./Animation";

interface ActivityIndicatorProps {
    visible?: boolean;
    type?: 'default' | 'overlay';
    animationSource: string | undefined;
}

function ActivityIndicator({ visible = false , type ="default", animationSource}: ActivityIndicatorProps) {
    const defaultStyles = useStyle();

    if (!animationSource) {
        animationSource = require('../../../../assets/animations/loader.json');
    }

    const styles = StyleSheet.create({
        overlay: {
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: defaultStyles.backgroundColor,
            height: '100%',
            position: 'absolute',
            width: '100%',
            zIndex: 1,
            opacity: 0.8
        },
        default: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    });

    if (!visible) {
        return null;
    }

    const style = type === 'default' ? styles.default : styles.overlay;

    return (
        <View style={style}>
            <Animation
                source={animationSource}
                autoPlay={true}
                loop={true}
                style={{height: 100, width: 100, opacity: 1}}
                speed={1.5}
            />
        </View>
    );
}

export default ActivityIndicator;
