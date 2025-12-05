import * as SecureStore from 'expo-secure-store';
import AsyncStorage from "@react-native-async-storage/async-storage";

const userKey = 'user';
const tokenKey = 'authToken';

const getUser = async () => {
    return await fetch(userKey);
};

const storeUser = user => {
    store(userKey, user, 'error storing the user');
};

const storeAuthToken = async token => {
    await storeSecure(tokenKey, token, 'error storing the auth token');
};

const getAuthToken = async (): Promise<any> => {
    return await fetchSecure(tokenKey);
};

const removeAuthToken: () => void = (): void => {
    removeSecure(tokenKey);
}

const removeUser: () => void = (): void => {
    remove(userKey);
}

const removeSecure : (key: string) => Promise<void> = async (key: string): Promise<void> => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.error('error removing ' + key + ' from storage', error);
    }
}

const storeSecure = async (key: string, value, errorMessage = 'error storing value') => {
    try {
        await SecureStore.setItemAsync(key, JSON.stringify(value));
    } catch (error) {
        console.error(errorMessage, error);
    }
}

const fetchSecure = async (key: string): Promise<any> => {
    try {
        return JSON.parse(await SecureStore.getItemAsync(key));
    } catch (error) {
        console.error('error fetcghing storage key ' + key, error);
    }
}

const store = async (key: string, value: any, errorMessage: string = 'error storing value'): Promise<void> => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(errorMessage, error);
    }
}

const fetch: (key: string) => Promise<any> = async (key: string): Promise<any> => {
    try {
        return JSON.parse(await AsyncStorage.getItem(key));
    } catch (error) {
        console.error('error fetcghing storage key ' + key, error);
    }
}

const remove: (key: string) => Promise<void> = async (key: string): Promise<void> => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error('error removing ' + key + ' from storage', error);
    }
}

export default { getAuthToken, getUser, removeAuthToken, removeUser, storeAuthToken, storeUser };
