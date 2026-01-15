import { createContext } from "react";
import Constants from "expo-constants";
import { bool } from "yup";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;
const clientId = process.env.EXPO_PUBLIC_API_CLIENT_ID;

interface SettingsContextProps {
    apiUrl: string,
    authCallbackURL: 'oauth2/callback',
    clientId: string,
    discovery: {
        authEndpoint: string,
        tokenEndpoint: string,
    },
    scheme: 'bone',
    xDebugHeader: boolean,
};


const SettingsContext = createContext<SettingsContextProps>({
    apiUrl: apiUrl,
        authCallbackURL: 'oauth2/callback',
        clientId: clientId,
        discovery: {
            authEndpoint: apiUrl + '/en_GB/oauth2/authorize',
            tokenEndpoint: apiUrl + '/en_GB/oauth2/token',
        },
        scheme: 'bone',
        xDebugHeader: false,
});

export default SettingsContext;
