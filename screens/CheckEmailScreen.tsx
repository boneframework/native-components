import {StyleSheet, View} from "react-native";
import React from "react";

import Animation from "../components/Animation";
import Background from "../components/Background";
import Text from '../components/Text';

import colors from "../../../../config/colors";

function CheckEmailScreen({backgroundSource = null}) {

    return (
        <Background blurRadius={10} style={styles.container} imageSource={backgroundSource} gradientColors={colors.bgGradient} >
            <View style={styles.animationContainer}>
                <Animation
                    autoPlay={true}
                    loop={true}
                    source={require('../../../../assets/animations/email.json')}
                    style={styles.animation}
                    speed={1}
                />
                <Text style={styles.activate}>Activate your account</Text>
                <Text style={styles.info}>Check your email and click on the link to open the app and activate your account.</Text>
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    animationContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 10,
        marginTop: -50
    },
    animation: {
        width: 150,
        height: 150,
    },
    activate: {
        marginTop: 20,
        textTransform: 'uppercase',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: colors.white,
        textAlign: 'center'
    },
    info: {
        color: colors.white,
        textAlign: 'center'
    },
})

export default CheckEmailScreen;
