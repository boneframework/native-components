import {useContext, useState} from "react";

import AuthContext from "../contexts/auth";
import authStorage from "../utilities/authStorage";
import useApi from "./useApi";
import usersApi from "../api/users";

export default useAuth = () => {
    const value = useContext(AuthContext);

    if (process.env.NODE_ENV !== 'production') {
        if (!value) {
            throw new Error('useSession must be wrapped in a <SessionProvider />');
        }
    }

    return value;
}
