import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import {useEffect} from "react";
import {Platform} from "react-native";
import Constants from "expo-constants";

import expoPushTokensApi from "../api/notifications";
import {useStorageState} from "./useStorageState";

const useNotifications = (notificationReceivedListener = notification => {}) => {
    
}

export default useNotifications;
