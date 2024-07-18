import {useContext, useState} from "react";

import AuthContext from "../contexts/auth";
import authStorage from "../utilities/authStorage";
import useApi from "./useApi";
import usersApi from "../api/users";

export default useAuth = () => {
    const profileApi = useApi(usersApi.getProfile);
    const {user, setUser} = useContext(AuthContext);
    const {isLoading, setIsLoading} = useState(false);

    const login = async authToken => {
        setIsLoading(true);
        await authStorage.storeAuthToken(authToken).then(async () => {
            const user = await profileApi.request(authToken);
            authStorage.storeUser(user.data);
            user.data.authToken = authToken;
            setUser(user.data);
            setIsLoading(false);
        });
    }

    const updateUser = async user => {
        setIsLoading(true);
        const authToken = user.authToken;
        await delete user.authToken;
        authStorage.storeUser(user);
        user.authToken = authToken;
        setUser({...user});
        setIsLoading(false);
    }

    const logout = () => {
        setUser(null);
        authStorage.removeAuthToken();
        authStorage.removeUser();
    }

    return {login, logout, updateUser, user, isLoading};
}
