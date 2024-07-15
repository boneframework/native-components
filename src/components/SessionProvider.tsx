import React, {useState} from 'react';

import AuthContext from "../contexts/auth";
import useAuth from "../hooks/useAuth";

function SessionProvider(props: object) {
    const [user, setUser] = useState(null);
    const auth = useAuth();
    setUser(auth.user);

    return (
        <AuthContext.Provider
            value={{
                signIn: async (authToken: string) => {
                    auth.login(authToken);
                    setUser(auth.user);
                },
                signOut: () => {
                    auth.logout();
                    setUser(null);
                },
                user,
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}



export default SessionProvider;
