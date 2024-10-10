import ActivityIndicator from "@boneframework/native-components/components/ActivityIndicator";
import {exchangeCodeAsync, makeRedirectUri, useAuthRequest} from "expo-auth-session";
import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";

import Button from '../components/Button';

import colors from '../../../../config/colors';

function WelcomeScreen({
    loginOnPress = () => {},
    registerOnPress = () => {},
    title = 'BONE FRAMEWORK',
    isLoading = false,
    logoTopMargin = 70,
    logoWidth = 150,
    logoHeight = 105
}) {
    const styles = StyleSheet.create({
        background: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        logo: {
            width: logoWidth,
            height: logoHeight
        },
        logoContainer: {
            position: 'absolute',
            top: logoTopMargin,
            alignItems: "center"
        },
        buttonContainer: {
            width: "100%",
            padding: 20
        },
        tagline: {
            fontSize: 50,
            fontWeight: 'bold',
            paddingTop: 10,
            color: colors.white,
            textAlign: 'center'
        },
    });

    return (
        <ImageBackground blurRadius={10} style={styles.background} source={require('../../../../assets/background.png')} >
            <ActivityIndicator visible={isLoading} type={'overlay'} />
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../../../assets/logo.png')} />
                <Text style={styles.tagline}>{ title }</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="login" color="primary" onPress={loginOnPress} ></Button>
                <Button title="register" color="secondary" onPress={registerOnPress}></Button>
            </View>
        </ImageBackground>
    );
}


export default WelcomeScreen;
