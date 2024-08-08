import React, {useEffect, useState} from 'react';

import AuthContext from "@boneframework/native-components/contexts/auth";
import {useSecureStorageState} from "@boneframework/native-components/hooks/useSecureStorageState";
import {useStorageState} from "@boneframework/native-components/hooks/useStorageState";
import authStorage from "@boneframework/native-components/utilities/authStorage";
import useApi from "@boneframework/native-components/hooks/useApi";
import usersApi from "@boneframework/native-components/api/users";

function SessionProvider(props: object) {
    const profileApi = useApi(usersApi.getProfile);
    const [[isAuthTokenLoading, authToken], setAuthToken] = useSecureStorageState('authToken');
    const [[isUserLoading, user], setUser] = useStorageState('user');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(profileApi.loading || isAuthTokenLoading || isUserLoading);
    }, [profileApi.loading, isAuthTokenLoading, isUserLoading]);


    return (
        <AuthContext.Provider
            value={{
                login: async (authToken: object) => {
                    setIsLoading(true);
                    await authStorage.storeAuthToken(authToken).then(async () => {
                        const userProfile = await profileApi.request(authToken.accessToken);
                        userProfile.data.authToken = authToken;
                        setAuthToken(authToken)
                        await setUser(userProfile.data);
                        setIsLoading(false);
                    });
                },
                logout: () => {
                    setAuthToken(null);
                    setUser(null);
                },
                updateUser: async data => {
                    setUser(data)
                },
                user,
                isLoading
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default SessionProvider;
