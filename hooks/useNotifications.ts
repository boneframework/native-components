import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import {useEffect} from "react";
import {Platform} from "react-native";
import Constants from "expo-constants";

import expoPushTokensApi from "../api/notifications";
import {useStorageState} from "./useStorageState";

export default useNotifications = (notificationReceivedListener = notification => {}) => {
    const [[isPushTokenLoading, pushToken], setPushToken] = useStorageState('pushToken');

    useEffect(() => {
        registerForPushNotifications();
        Notifications.addNotificationReceivedListener(notification => {
            notificationReceivedListener(notification);
        });
    }, []);

    const registerForPushNotifications = () => registerForPushNotificationsAsync();

    const handleRegistrationError = (errorMessage: string) => {
        alert(errorMessage);
        throw new Error(errorMessage);
    }

    const projectId = Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;

    if (!projectId) {
        handleRegistrationError('Project ID not found');
    }

    const registerForPushNotificationsAsync = async () => {
        if (Device.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;

            if (existingStatus !== 'granted') {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                return;
            }
            const token = (await Notifications.getExpoPushTokenAsync({
                projectId,
            })).data;

            if (!isPushTokenLoading && pushToken !== token) {
                setPushToken(token)
                expoPushTokensApi.register(token);
            }

        } else {
            alert('Must use physical device for Push Notifications');
        }

        if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }
    };
}
