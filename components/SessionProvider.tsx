import React, {useState} from 'react';

import AuthContext from "../contexts/auth";
import useAuth from "../hooks/useAuth";

function SessionProvider(props: object) {
    const {login, logout, updateUser, user, isLoading} = useAuth();

    return (
        <AuthContext.Provider
            value={{
                signIn: async (authToken: string) => {
                    login(authToken);
                },
                signOut: () => {
                    logout();
                },
                update: data => updateUser(data),
                user,
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default SessionProvider;
