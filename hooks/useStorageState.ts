import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from 'react';
import { Platform } from 'react-native';

type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void];

function useAsyncState<T>(
    initialValue: [boolean, T | null] = [true, null],
): UseStateHook<T> {
    return React.useReducer(
        (state: [boolean, T | null], action: T | null = null): [boolean, T | null] => [false, action],
        initialValue
    ) as UseStateHook<T>;
}



export async function setStorageItemAsync(key: string, value: object | string | null) {
    if (typeof value === 'object') {
        value = JSON.stringify(value);
    }

    if (Platform.OS === 'web') {
        try {
            if (value === null) {
                localStorage.removeItem(key);
            } else {
                localStorage.setItem(key, value);
            }
        } catch (e) {
            console.error('Local storage is unavailable:', e);
        }
    } else {
        if (value == null) {
            await AsyncStorage.removeItem(key);
        } else {
            await AsyncStorage.setItem(key, value);
        }
    }
}

export function useStorageState(key: string): UseStateHook<string> {
    const isJson = () => {
        try {
            const result = JSON.parse(str);
            const type = Object.prototype.toString.call(result);
            return type === '[object Object]'
                || type === '[object Array]';
        } catch (err) {
            return false;
        }
    }
    // Public
    const [state, setState] = useAsyncState<string|object>();
    // Get

    React.useEffect(() => {
        if (Platform.OS === 'web') {
            try {
                if (typeof localStorage !== 'undefined') {
                    value = localStorage.getItem(key);

                    if (isJson(value)) {
                        value = JSON.parse(value);
                    }

                    setState(value);
                }
            } catch (e) {
                console.error('Local storage is unavailable:', e);
            }
        } else {
            AsyncStorage.getItem(key).then(value => {

                if (isJson(value)) {
                    value = JSON.parse(value);
                }

                setState(value);
            });
        }
    }, [key]);


    // Set
    const setValue = React.useCallback(
        (value: object | string | null) => {
            setState(value);
            setStorageItemAsync(key, value);
        },
        [key]
    );

    return [state, setValue];
}
