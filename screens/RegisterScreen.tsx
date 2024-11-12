import { router } from 'expo-router';
import React, {useState} from 'react';
import {Image, ImageBackground, Keyboard, StyleSheet, TouchableOpacity, View} from "react-native";
import * as Yup from 'yup'

import ActivityIndicator from "../components/ActivityIndicator";
import Background from "../components/Background";
import useApi from "../hooks/useApi";
import usersApi from '../api/users';
import {ErrorMessage, FormField, Form, SubmitButton} from '../components/forms'
import Icon from "../components/Icon";

import colors from "../../../../config/colors";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
});

function RegisterScreen({postRegisterUrl, backgroundSource = null}) {
    const registerApi = useApi(usersApi.register);
    const [error, setError] = useState();
    const onClose = () => router.back();

    const handleSubmit = async userInfo => {
        Keyboard.dismiss();
        const result = await registerApi.request(userInfo);

        if (!result.ok) {
            if (result.data) {
                setError(result.data.error);
            } else {
                setError('An unexpected error occured');
                console.error(result);
            }

            return;
        }

        router.navigate(postRegisterUrl);
    };

    return (
        <>
        <ActivityIndicator visible={registerApi.loading} type={'overlay'}/>
        <Background imageSource={backgroundSource} blurRadius={10} style={styles.background} gradientColors={colors.bgGradient} >
            <View style={styles.container}>
                <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                    <Icon size={75} name={'chevron-left'} />
                </TouchableOpacity>
                <Image style={styles.logo} source={require('../../../../assets/logo.png')} />

                <Form
                    initialValues={{ email: ''}}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage error={error} visible={error} />
                    <FormField
                        name="email"
                        icon="email"
                        placeholder="Email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                    />
                    <SubmitButton color="primary" title="Register" />
                </Form>
            </View>
        </Background>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    logo: {
        width: 150,
        height: 105,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
    background: {
        height: '100%'
    },
    cancelButton: {
        top:10,
        left:-20
    }
})

export default RegisterScreen;
