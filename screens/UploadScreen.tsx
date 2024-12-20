import React from 'react';
import {Modal, StyleSheet, View} from "react-native";
import * as Progress from 'react-native-progress';

import Animation from "../components/Animation";
import colors from '../../../../config/colors';

function UploadScreen({onDone, progress = 0, visible = false, animationSource = '../../../../assets/animations/done.json'}) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                { progress < 1
                    ? <Progress.Bar color={colors.primary} progress={progress} width={200}/>
                    : <Animation
                        autoPlay={true}
                        loop={false}
                        onAnimationFinish={onDone}
                        source={require(animationSource)}
                        style={styles.animation}
                    />
                }
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    animation: {
        width: 150,
    },
})

export default UploadScreen;
