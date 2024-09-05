import {ImageBackground, Keyboard, StyleSheet, View} from "react-native";
import {router, useGlobalSearchParams} from 'expo-router';
import React, {useEffect, useState} from "react";

import ActivityIndicator from "../components/ActivityIndicator";
import {ErrorMessage, Form, FormField, SubmitButton} from "../components/forms";
import ResendActivationScreen from "../screens/ResendActivationlScreen";
import SetPasswordScreen from "../screens/SetPasswordScreen";
import useApi from "../hooks/useApi";
import useAuth from "../hooks/useAuth";
import userApi from "../api/users";

import settings from "../../../../config/settings";
import routes from "../../../../config/routes";

function ActivateUserScreen() {
    const STATUS_BEGIN = 'start_validating';
    const STATUS_VALIDATE = 'validate_email_token';
    const STATUS_RESEND = 'resend_email_token';
    const STATUS_SET_PASSWORD = 'set_password';

    const activationApi = useApi(userApi.activateAccount);
    const resendActivationApi = useApi(userApi.resendactivationEmail);
    const validateEmailTokenApi = useApi(userApi.validateEmailToken);

    const [status, setStatus] = useState(STATUS_BEGIN);
    const [error, setError] = useState();
    const [tokenError, setTokenError] = useState();

    const {login} = useAuth();
    const params = useGlobalSearchParams();
    const email = params.email;
    const token = params.token;

    const validateEmailToken = async () => {
        setStatus(STATUS_VALIDATE);
        const result = await validateEmailTokenApi.request(email, token);

        if (result.data.ok) {
            setStatus(STATUS_SET_PASSWORD);
        }

        if (result.data.error) {
            setTokenError(result.data.error);

            switch (result.data.error) {
                case 'The email link has expired.':
                    setStatus(STATUS_RESEND);
                    break;
            }
        }
    }

    const convertResponse = (data) => {
        return {
            accessToken: data.access_token,
            expiresIn: data.expires_in,
            refreshToken: data.refresh_token,
            tokenType: data.token_type,
        }
    }

    const handleSubmit = async userInfo => {
        Keyboard.dismiss();
        try {
            const result = await activationApi.request(email, token, settings.clientId, userInfo.password);

            if (!result.ok) {
                if (result.data) {
                    switch (result.data.error) {
                        case 'The email link has expired.':
                        case 'A matching email link was not found':
                        case 'The token did not match.':
                            setTokenError(result.data.error);
                            break;
                    }
                    setError(result.data.error);
                } else {
                    setError('An unexpected error occured');
                    console.error(result);
                }

                return;
            }

            login(convertResponse(result.data)).then(router.navigate(routes.HOME));
        } catch (error) {
            setError(error);
            console.error(error);
        }

    };

    const resendActivationEmail = async () => {
        resendActivationApi
            .request(email)
            .then(setStatus(STATUS_VALIDATE))
            .then(navigation.goBack())
            .then(navigation.navigate(routes.USER_ACTIVATION_CHECK_EMAIL))
            .catch(console.error);
    }

    useEffect(() => {
        if (status === STATUS_BEGIN) {
            validateEmailToken();
        }
    });

    return (
        <>
            <ActivityIndicator visible={activationApi.loading || resendActivationApi.loading || validateEmailTokenApi.loading} type={'overlay'}/>
            <ImageBackground blurRadius={10} style={styles.container} source={require('../../../../assets/background.png')} >
                { (status === STATUS_SET_PASSWORD || status === STATUS_VALIDATE)  && <SetPasswordScreen submitCallback={handleSubmit} error={error}/> }
                { status === STATUS_RESEND && <ResendActivationScreen email={email} tokenError={tokenError} submitCallback={resendActivationEmail}/> }
            </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    }
})

export default ActivateUserScreen;


